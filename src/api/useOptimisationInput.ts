type UseOptimisationInputType = ({
  onChange,
  value,
  inputRef
}: {
  onChange: (value: any) => void;
  value: any;
  inputRef: React.MutableRefObject<any>;
}) => {
  onChangeOptimized: (e: any) => void;
  onBlurOptimized: (e: any) => void;
};

export const useOptimisationInput: UseOptimisationInputType = (props) => {
  const { onChange, value, inputRef } = props;
  if (inputRef && inputRef.current && inputRef.current.value !== value) {
    inputRef.current.value = value;
  }
  let timerHandler: ReturnType<typeof setTimeout> | null = null;

  const onChangeOptimized = (e: any) => {
    if (timerHandler) {
      clearTimeout(timerHandler);
    }
    const cachedValue = e.target.value;
    timerHandler = setTimeout(() => {
      onChange(cachedValue);
    }, 300);
  };
  const onBlurOptimized = (e: any) => {
    if (timerHandler) {
      clearTimeout(timerHandler);
    }
    onChange(e.target.value);
  };
  return { onChangeOptimized, onBlurOptimized };
};
