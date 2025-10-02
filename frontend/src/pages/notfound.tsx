import { Link } from "react-router-dom";
import ScrambledText from "@/components/ScrambledText";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[800px] bg-background text-foreground px-6">
      <ScrambledText
        className="text-7xl md:text-9xl font-extrabold leading-tight mb-4"
        radius={300}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        404
      </ScrambledText>

      <ScrambledText
        className="text-2xl md:text-3xl font-semibold mb-6"
        radius={300}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        Page Not Found
      </ScrambledText>

      <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl text-center">
        Oops! The page you are looking for doesn’t exist or may have been moved.  
        Please check the URL or return to the homepage.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-base font-medium hover:bg-primary/80 transition shadow-md"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
