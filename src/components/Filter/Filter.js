import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import styles from './Filter.module.css';

const Filter = ({ filterValue, onFilter }) => {
  return (
    <form className={styles.form}>
      <label>
        Find contacts by name
        <input
          type="text"
          className={styles.input}
          value={filterValue}
          onChange={onFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filterValue: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilter: ev => dispatch(contactsActions.changeFilter(ev.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
