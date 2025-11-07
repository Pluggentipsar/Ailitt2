"use client";

import { useEffect } from "react";

/**
 * PrintHandler component handles selective printing of sections and activities.
 * It listens to beforeprint/afterprint events and adds data attributes to body
 * and classes to target elements based on sessionStorage values.
 */
export function PrintHandler() {
  useEffect(() => {
    const handleBeforePrint = () => {
      const printSection = sessionStorage.getItem("print-section");
      const printActivity = sessionStorage.getItem("print-activity");

      if (printSection) {
        document.body.setAttribute("data-print-section", printSection);
        // Find the section group and mark it for printing
        const sectionGroup = document.querySelector(`.prose .group:has(h2#${CSS.escape(printSection)})`);
        if (sectionGroup) {
          sectionGroup.classList.add("print-target-section");
        }
      } else if (printActivity) {
        document.body.setAttribute("data-print-activity", printActivity);
        // Find the activity and mark it for printing
        const activity = document.getElementById(printActivity);
        if (activity) {
          activity.classList.add("print-target-activity");
        }
      }
    };

    const handleAfterPrint = () => {
      document.body.removeAttribute("data-print-section");
      document.body.removeAttribute("data-print-activity");

      // Remove print target classes
      document.querySelectorAll(".print-target-section").forEach((el) => {
        el.classList.remove("print-target-section");
      });
      document.querySelectorAll(".print-target-activity").forEach((el) => {
        el.classList.remove("print-target-activity");
      });
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return null;
}
