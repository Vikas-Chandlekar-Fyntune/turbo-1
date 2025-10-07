import { Button } from "@vkc/ui-kit/components";
import { cn } from "@vkc/ui-kit/utils";

const App = () => {
  return (
    <>
      <h1 className="text-red-500 text-7xl">Dashboard</h1>
      <button className="bg-emerald-400 p-2">Ok</button>
      <div className="bg-brand text-white p-4">Brand Blue</div>
      <div className="bg-brand-light text-brand-dark">Custom Shades</div>
      <div className="bg-mint-500 bg-red1000">Accent Orange</div>
      <div className="bg-vikas">vikas</div>
      <Button
        className={cn("mt-3 bg-red-600", "bg-purple-400")}
        variant="secondary"
      >
        Submit
      </Button>
    </>
  );
};

export default App;
