"use client";
import { ReactNode, Suspense } from "react";
import Navbar from "./Navbar";
import Scene from "../home/Scene";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main>
      <Navbar />
      {/* Fixed 3D Background */}
      <section className="fixed top-0 left-0 w-screen h-screen">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>
      </section>
      {/* Scrollable Content */}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
