import type { MetaFunction } from '@remix-run/cloudflare';
import { Landing } from '~/components/Landing';

export const meta: MetaFunction = () => {
    return [
        { title: 'Affine' },
        { name: 'description', content: 'Welcome to Affine!' },
    ];
};

export default function Index() {
    return (
        <div>
            <Landing />
        </div>
    );
}
