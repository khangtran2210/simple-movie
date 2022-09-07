import React from "react";
import { useController } from "react-hook-form";
const InputCustom = ({ control, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });
  return (
    <input
      {...field}
      {...props}
      className="p-2 transition-all bg-[#323644] border border-transparent text-white rounded-lg outline-none focus:border focus:border-primary"
    />
  );
};

export default InputCustom;
