import { PrismaClient } from '@prisma/client'
 
let db: PrismaClient

declare global {
    var __db: PrismaClient | undefined
}

//This is needed because we don't want to restart the server with every
//  change in development nor create a new connection with every change. 
if (process.env.NODE_ENV === 'production') {
    db = new PrismaClient()
} else {
    if (!global.__db) {
        global.__db = new PrismaClient()
    }
    db = global.__db
}

export { db }