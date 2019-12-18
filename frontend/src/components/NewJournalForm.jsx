import React from 'react';
import PropTypes from 'prop-types';

function NewJournalForm() {
    let _name = null;

    function handleAddingNewJournal(event) {
        event.preventDefault();
        console.log(_name.value);
        _name.value = '';
    }
        var btnParent = {
            textAlign: 'center',
            marginTop: '20px'
        };
        var btnStyle = {
            backgroundColor: '#747d5e',
            padding: '10px'
        };
        return (
            <div>
                <form onSubmit={handleAddingNewJournal}>
                    <div style={btnParent} className='input-field'>
                        <input type='text'
                            id='name'
                            placeholder='Journal Name'
                            ref={(input) => { _name = input; }} />
                    </div>
                    <div style={btnParent}>
                        <button type='submit' style={btnStyle}>Add Journal</button>
                    </div>
                </form>
            </div>
        );
    }
NewJournalForm.propTypes = {
    onNewJournalCreation: PropTypes.func,
    currentUser: PropTypes.number
};

export default NewJournalForm;