import { Field } from './components/FieldComponent/Field';

export const Box = ({ setQuery }) => {
  return (
    <div className="box">
      <Field setQuery={setQuery} />
    </div>
  );
};
