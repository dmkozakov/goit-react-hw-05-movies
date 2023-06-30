import PropTypes from 'prop-types';

export default function Seearchbar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="search" onChange={e => e.target.value} />
      <button type="submit">search</button>
    </form>
  );
}

Seearchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
