import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postRole } from '../../actions';

const CreateRole = (props) => {
  const [input, setInput] = useState({
    name: '',
    permissions: {
      UU: false,
      UC: false,
      UD: false,
      PCU: false,
      PCD: false,
      RC: false,
      RU: false,
      RD: false,
    },
  });
  const [error, setError] = useState({
    name: '',
    server: '',
  });

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const onCheck = (event) => {
    let permissions = input.permissions;
    setInput({
      ...input,
      permissions: {
        ...permissions,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const initializeInput = (event) => {
    event.preventDefault();
    setInput({
      name: '',
      permissions: {
        UU: false,
        UC: false,
        UD: false,
        PCU: false,
        PCD: false,
        RC: false,
        RU: false,
        RD: false,
      },
    });
    setError({
      name: '',
      server: '',
    })
  };

  // const initializeErrors = (event) => {
  //   event.preventDefault();
  //   setError({
  //     name: '',
  //     server: '',
  //   })
  // }

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.name === '') {
      setError({
        name: 'Please enter a role name',
        server: '',
      });
    } else {
      setError({
        name: '',
        server: '',
      });
      props.postRole(input)
        .then((response) => {
          console.log(response);
          initializeInput();
        })
        .catch((error) => {
          console.log(error);
          setError({
            name: '',
            server: 'There was an error creating this role',
          });
        });
    }
  };

  return (
    <>
      <h2>Create a role</h2>
      <form autoComplete="off" spellCheck="false" onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter a role name"
          value={input.name}
          onChange={onChange}
        />
        {error.name && <p className="error">{error.name}</p>}
        <div className="checkboxes">
          <label>User Update: </label>
          <input
            name="UU"
            type="checkbox"
            checked={input.permissions.UU}
            onChange={onCheck}
          />
          <label>User Create: </label>
          <input
            name="UC"
            type="checkbox"
            checked={input.permissions.UC}
            onChange={onCheck}
          />
          <label>User Delete: </label>
          <input
            name="UD"
            type="checkbox"
            checked={input.permissions.UD}
            onChange={onCheck}
          />
          <label>Post/Comment Update: </label>
          <input
            name="PCU"
            type="checkbox"
            checked={input.permissions.PCU}
            onChange={onCheck}
          />
          <label>Post/Comment Delete: </label>
          <input
            name="PCD"
            type="checkbox"
            checked={input.permissions.PCD}
            onChange={onCheck}
          />
          <label>Room Create: </label>
          <input
            name="RC"
            type="checkbox"
            checked={input.permissions.RC}
            onChange={onCheck}
          />
          <label>Room Update: </label>
          <input
            name="RU"
            type="checkbox"
            checked={input.permissions.RU}
            onChange={onCheck}
          />
          <label>Room Delete: </label>
          <input
            name="RD"
            type="checkbox"
            checked={input.permissions.RD}
            onChange={onCheck}
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={initializeInput}>
            <i className="fas fa-times"></i>Reset
          </button>
          <button type="submit">
            Submit<i className="fas fa-check"></i>
          </button>
        </div>
        {error.server && <p className="error">{error.server}</p>}
      </form>
    </>
  );
};

export default connect(null, { postRole })(CreateRole);

// The permissions are boolean values laid out as follows:
// U: User PC: Post/Comment R: Room followed by - C: Create, U: Update, D: Delete
// {
// 	"name": string, //the name of the new permission
// 	"permissions": { //all of these values must be provided as either true or false
// 		     "UU": boolean,
//         "UC": boolean,
//         "UD": boolean,
//         "PCU": boolean,
//         "PCD": boolean,
//         "RC": boolean,
//         "RU": boolean,
//         "RD": boolean
// 	}
// }
