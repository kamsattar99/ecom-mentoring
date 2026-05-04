import { useEffect } from "react";

export default function Apply() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div
        data-tf-widget="mimJCUN0"
        data-tf-opacity="100"
        data-tf-inline-on-mobile
        data-tf-iframe-props="title=Mentorship Application"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
