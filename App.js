import * as React from 'react';

const optionsList = [
	{label: "Watch Movies", value: "Watch Movies", checked: false},
	{label: "Watch TV", value: "Watch TV", checked: false},
	{label: "Play Games", value: "Play Games", checked: false},
	{label: "Read", value: "Read", checked: false},
	{label: "Nap", value: "Nap", checked: false},
	{label: "Cook", value: "Cook", checked: false}
];

const [options, setOptions] = useState(optionsList);
const [openDropDown, setOpenDropDown] = useState(false);
const checkedHobbies = options.filter(options => options.checked);

const DropDown = () => {
	return (
		<div
      className={`dropdown ${openDropDown ? 'open' : ''}`}
      onClick={() => setOpenDropDown(!openDropDown)}
    >
      <div 
        className="selected-hobbies"
      >
        {checkedHobbies.length === 0 ? (
          <span>Select options</span>
        ) : checkedHobbies.length === 1 ? (
          <span>{checkedHobbies[0].label}</span>
        ) : (
          <span>{checkedHobbies.length} hobbies selected</span>
        )}
      </div>
      <div 
        className={`dropdown-menu ${openDropDown ? 'show' : ''}`}
      >
        {options.map(option => (
          <div className="option" key={option.value}>
            <label>
              <input
                type="checkbox"
                checked={option.checked}
                onClick={e => e.stopPropagation()}
                onChange={() => {
                  const updatedOptions = options.map(opt =>
                    opt.value === option.value
                      ? { ...opt, checked: !opt.checked }
                      : opt
                  );
                  setOptions(updatedOptions);
                }}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
	)
}

export default DropDown;
