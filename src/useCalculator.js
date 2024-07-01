import { useState , useCallback , useMemo} from 'react';

const useCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleClick = useCallback((value) => {
      if (value === '=') {
        try {
          const evalResult = eval(input);
          setResult(evalResult);
        } catch (error) {
          setResult('Error');
        }
      } else if (value === 'C') {
        setInput('');
        setResult('');
      } else {
        setInput(prevInput => prevInput + value);
      }
    }, [input]);
  
    // Memoize the result for display
    const displayResult = useMemo(() => {
      return result !== '' ? result.toString() : '';
    }, [result]);
  
    // Return state and handler functions
    return {
      input,
      displayResult,
      handleClick
    };
  };

  export default useCalculator