import React from "react";
import { FireIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer class="p-10 footer bg-blue-400 text-primary-content footer-center">
      <div>
        <FireIcon className="h-10 w-10 text-white" />
        <p class="font-bold">
          Daily Calories
          <br />
          Track Your Calories
        </p>
        <p>Copyright © 2021 - All right reserved</p>
      </div>
    </footer>
  );
}
