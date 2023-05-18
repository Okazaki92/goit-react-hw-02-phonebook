import propTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div className="filter">
      <h2 className="filter_header">Search Contact by Name</h2>
      <input
        className="filter_input"
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
