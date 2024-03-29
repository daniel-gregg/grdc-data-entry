import type { User } from '@prisma/client'

import { Authenticator } from 'remix-auth'
import { TOTPStrategy } from 'remix-auth-totp'

import { authSessionStorage } from '~/utils/auth/auth-session.server'
import { sendAuthEmail } from '~/utils/email/email.server'
import { db } from '~/utils/db.server'

export let authenticator = new Authenticator<User>(authSessionStorage, {
  throwOnError: true,
})

/**
 * TOTP - Strategy.
 */
authenticator.use(

  new TOTPStrategy(
    { 
      
      secret: process.env.ENCRYPTION_SECRET,
      //magicLinkGeneration: { callbackPath: '/magic-link' },

      createTOTP: async (data, expiresAt) => {
        await db.totp.create({ data: { ...data, expiresAt } })

        try {
          // Delete expired TOTP records (Optional).
          await db.totp.deleteMany({ where: { expiresAt: { lt: new Date() } } })
        } catch (error) {
          console.warn('Error deleting expired TOTP records', error)
        }
      },
      readTOTP: async (hash) => {
        // Get the TOTP data from the database.
        return await db.totp.findUnique({ where: { hash } })
      },
      updateTOTP: async (hash, data, expiresAt) => {
        // Update the TOTP data in the database.
        await db.totp.update({ where: { hash }, data })
      },
      sendTOTP: async ({ email, code, magicLink }) => {
        await sendAuthEmail({ email, code })
      },
    },
    async ({ email }) => {
      let user = await db.user.findUnique({ where: { email } })

      if (!user) {
        //user = await db.user.create({ data: { email } })
        if (!user) throw new Error("Whoops! this user doesn't exist. If you think it should please contact the.")
      }

      return user
    },
  ),
)
