"use client";
import { shape } from "../../styles/common";
import { MinusIcon, PlusIcon } from "./icons/NumberControls";

type BaseInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "type" | "value"
>;

interface InputProps extends BaseInputProps {
  label: string;
  type?: "text" | "date" | "number";
  value: string;
  onChange: (value: string) => void;
  className?: string;
  inputMode?: "numeric" | "text" | "none";
  numberType?: "nights" | "people";
}

export function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  numberType,
  ...inputProps
}: InputProps) {
  const maxValue =
    numberType === "nights" ? 28 : numberType === "people" ? 24 : 99;
  const minValue = 1;
  const currentValue = Number(value);

  const isAtMax = currentValue >= maxValue;
  const isAtMin = currentValue <= minValue;

  // Generate options array based on numberType
  const options = Array.from(
    { length: maxValue - minValue + 1 },
    (_, i) => i + minValue
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const handleIncrement = () => {
    if (type === "number" && !isAtMax) {
      onChange((currentValue + 1).toString());
    }
  };

  const handleDecrement = () => {
    if (type === "number" && !isAtMin) {
      onChange((currentValue - 1).toString());
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label
        className="text-2xl font-black tracking-tight
        bg-gradient-to-r
        dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary
        from-light-accent-primary via-light-text-primary to-light-accent-secondary
        bg-clip-text text-transparent"
      >
        {numberType === "nights" ? "Nights" : label}
      </label>
      <div className="flex gap-2 items-stretch w-full">
        {type === "number" ? (
          <div className="flex items-center gap-2 w-full">
            <button
              type="button"
              onClick={handleDecrement}
              disabled={isAtMin}
              className={`w-20 h-14 flex items-center justify-center
                      text-lg font-medium rounded-full
                      dark:bg-dark-base/50 bg-light-base/50
                      dark:text-dark-text-primary text-light-text-primary
                      dark:shadow-neu-dark-subtle shadow-neu-light-subtle
                      hover:dark:shadow-neu-dark-subtle-pressed hover:shadow-neu-light-subtle-pressed
                      transition-all duration-200 flex-shrink-0
                      disabled:opacity-50 disabled:cursor-not-allowed
                      disabled:hover:shadow-none`}
            >
              <MinusIcon />
            </button>
            <div className="relative flex-1">
              <select
                value={value}
                onChange={handleSelectChange}
                className={`
                  w-full h-14 text-center text-3xl font-bold appearance-none
                  ${shape.borderRadius} outline-none
                  dark:bg-dark-base/50 bg-light-base/50
                  dark:text-dark-text-primary text-light-text-primary
                  dark:shadow-neu-dark-pressed shadow-neu-light-pressed
                  cursor-pointer
                  [&>option]:text-base [&>option]:font-normal
                  [&>option]:py-1 [&>option]:px-2
                  [&:not([size])]:bg-none
                  [&_optgroup]:bg-dark-base [&_option]:bg-dark-base
                  [&_optgroup]:dark:bg-dark-base [&_option]:dark:bg-dark-base
                  [&_optgroup]:bg-light-base [&_option]:bg-light-base
                  [&_optgroup]:dark:text-dark-text-primary [&_option]:dark:text-dark-text-primary
                  [&_optgroup]:text-light-text-primary [&_option]:text-light-text-primary
                  ${className}
                `}
                style={{
                  textAlignLast: "center",
                }}
              >
                {options.map((num) => (
                  <option
                    key={num}
                    value={num}
                    className="text-base"
                    style={{
                      direction: "ltr",
                      textAlign: "center",
                    }}
                  >
                    {num}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg
                  className="h-5 w-5 dark:text-dark-text-primary text-light-text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <button
              type="button"
              onClick={handleIncrement}
              disabled={isAtMax}
              className={`w-20 h-14 flex items-center justify-center
                      text-lg font-medium rounded-full
                      dark:bg-dark-base/50 bg-light-base/50
                      dark:text-dark-text-primary text-light-text-primary
                      dark:shadow-neu-dark-subtle shadow-neu-light-subtle
                      hover:dark:shadow-neu-dark-subtle-pressed hover:shadow-neu-light-subtle-pressed
                      transition-all duration-200 flex-shrink-0
                      disabled:opacity-50 disabled:cursor-not-allowed
                      disabled:hover:shadow-none`}
            >
              <PlusIcon />
            </button>
          </div>
        ) : (
          <input
            {...inputProps}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`
              ${shape.borderRadius} p-4 w-full outline-none font-semibold
              dark:bg-dark-base/50 bg-light-base/50
              dark:text-dark-text-primary text-light-text-primary
              dark:shadow-neu-dark-pressed shadow-neu-light-pressed
              placeholder:text-placeholder/60
              ${className}
            `}
          />
        )}
      </div>
    </div>
  );
}
