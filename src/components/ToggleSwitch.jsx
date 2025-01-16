import React from "react";
import { Switch, Typography } from "@material-tailwind/react";
import { useState } from "react";

const ToggleSwitch = () => {
  const [autoSave, setAutoSave] = useState(true);

  return (
    <Switch
      onClick={() => setAutoSave((prev) => !prev)}
      defaultChecked={true}
      id="custom-switch-component"
      label={
        <div>
          <Typography
            className={`text-xs md:text-sm font-medium md:scale-95 sm:scale-50 ${
              autoSave ? "text-[#0E9F6E]" : "text-gray-700"
            }`}
          >
            Auto Save
          </Typography>
        </div>
      }
      ripple={false}
      className=" h-full w-full checked:bg-[#0E9F6E]"
      containerProps={{
        className: "w-7 h-[14px] md:w-11 md:h-6",
      }}
      circleProps={{
        className:
          "before:hidden left-0.5 md:left-0.5 w-3 h-3 md:w-5 md:h-5 border-none",
      }}
    />
  );
};

export default ToggleSwitch;
