import ThemeProvider from "@/helper/ThemesProvider";
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Comic_Neue, Wendy_One} from 'next/font/google';
import Floating_button from "@/components/floating_button";
export const metadata = {
    title: "Thabith.dev - portfolio",
    description: "My personal portfolio showcasing my skills and projects.",
    icons: {
        icon: "/images/ast.png",
    }
};


const comic = Comic_Neue({
    subsets: ['latin'],
    weight: ['400', '700'],
});


const wendy = Wendy_One({
    subsets: ["latin"],
    weight: ["400"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={wendy.className}>
        <ThemeProvider>
            <Header/>
            <main className="bg-transparent grid place-items-start w-screen">
                {children}
            </main>
            <Floating_button/>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}