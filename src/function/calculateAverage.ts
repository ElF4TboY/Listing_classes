export const calculateAverage = (notesBoard: number[]): string => {
  const initialValue = 0;
  const sumWithInitial = notesBoard.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return (sumWithInitial / notesBoard.length).toFixed(2);
};
