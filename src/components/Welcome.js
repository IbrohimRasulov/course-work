const Welcome = (props) => {
  console.log(props)
  return <h2>{`Salom, ${props.formData.ism}!`}</h2>;
};

export default Welcome;
