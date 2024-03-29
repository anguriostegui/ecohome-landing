import { Inter, Unbounded, DM_Sans } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-unbounded",
});

const satoshiRegular = localFont({
  src: "../public/fonts/Satoshi-Regular.ttf",
  formats: ["ttf"],
  style: "normal",
  variable: "--font-satoshi-regular",
});

const satoshiMedium = localFont({
  src: "../public/fonts/Satoshi-Medium.ttf",
  formats: ["ttf"],
  style: "normal",
  variable: "--font-satoshi-medium",
});

const satoshiBold = localFont({
  src: "../public/fonts/Satoshi-Bold.ttf",
  formats: ["ttf"],
  style: "normal",
  variable: "--font-satoshi-bold",
});

export const metadata = {
  title: "Ecohome App UI Kit",
  description: "E-commerce React Native & Expo UI Kit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          unbounded.variable,
          inter.variable,
          dmSans.variable,
          satoshiRegular.variable,
          satoshiMedium.variable,
          satoshiBold.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
