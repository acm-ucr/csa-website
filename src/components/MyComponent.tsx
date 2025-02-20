interface Props {
  text?: string;
  name?: string;
  children: React.ReactNode;
}

const MyComponent: React.FC<Props> = ({ text, name, children }) => {
  return (
    <div>
      {text} and my {name}
      {children}
    </div>
  );
};

export default MyComponent;
