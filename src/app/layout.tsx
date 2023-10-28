import '$/styles/globals.scss';
import Header from '$/components/Header';

export const metadata = {
    title: {
        template: '%s | Der Process - Lesetagebuch',
        default: 'Der Process - Lesetagebuch'
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
            <body>
                {children}
            </body>
        </html>
    );
}
