const steps = [
  "Cook the fish on the grill until hot.",
  "Place the fish on the 3 tortillas.",
  "Top them with lettuce, tomatoes, and cheese",
];

const ListItem = (props) => {
  const { text } = props;

  return <p>{text}</p>;
};

export default function SubPage() {
  return (
    <div>
      {steps.map((step, index) => {
        return (
          <ListItem key={index} text={step}>
            {step}
          </ListItem>
        );
      })}
    </div>
  );
}

const words = ["john", "JACOB", "jingGliemer", "schmidt"];

const result = words.map((word, index) => {
  return word.toUpperCase();
});
