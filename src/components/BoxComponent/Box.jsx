import { Field } from './components/FieldComponent/Field';

export const Box = ({ query, setQuery }) => {
  return (
    <div className="box">
      <Field query={query} setQuery={setQuery} />
    </div>
  );
};
