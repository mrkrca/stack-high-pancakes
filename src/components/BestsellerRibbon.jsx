
import { Ribbon } from "lucide-react";

const BestsellerRibbon = () => {
  return (
    <div className="absolute -right-[36px] top-[12px] rotate-45 w-[150px] text-center">
      <div className="bg-red-600 text-white py-1 px-3 text-xs font-bold shadow-lg flex items-center justify-center gap-1">
        <Ribbon size={14} className="inline-block" />
        BESTSELLER
      </div>
    </div>
  );
};

export default BestsellerRibbon;
