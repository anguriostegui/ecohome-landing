import React from "react";
import cn from "classnames";

export default function Logo({ className }) {
  return (
    <div className={cn(className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 6.92512L12.0039 2.16584e-05L24.0067 6.92512V19.491L21.2317 21.093V8.53628L12.0085 3.20973L2.77623 8.53628V21.093L0 19.491V6.92512Z"
          fill="#030712"
        />
        <path
          d="M7.80833 24L4.93921 22.343V9.77942L12.0031 5.70395L19.0669 9.77942V22.343L16.1978 24L12.0031 21.5781L7.80833 24ZM16.2001 20.6871L16.2069 11.3309L12.0123 8.9125L7.81751 11.3309L7.81062 20.6848L12.0031 18.2629L16.2001 20.6871Z"
          fill="#030712"
        />
      </svg>
      <div>Ecohome</div>
    </div>
  );
}
