import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
const FilterOptions = React.memo(
  ({ filters, singleFilters }) => {
    // Initialize state to keep track of checkbox values
    const [filterStates, setFilterStates] = useState({});
    const [singleFilterStates, setSingleFilterStates] = useState({});
    // Function to handle checkbox changes
    const filterHandler = (sectionId, optionValue) => {
      // Update the state to toggle the checkbox
      setFilterStates((prevState) => ({
        ...prevState,
        [sectionId]: {
          ...prevState[sectionId],
          [optionValue]: !prevState[sectionId]?.[optionValue],
        },
      }));
    };
    //   single filter Handler
    const singleFilterHandler = (sectionId, selectedValue) => {
      setSingleFilterStates((prevState) => ({
        ...prevState,
        [sectionId]: selectedValue, // Store the selected value for single filter
      }));
    };

    // Use useEffect to fetch data from the server and update filterStates
    useEffect(() => {
      // Simulate fetching data from the server
      // Replace this with your actual fetch logic
      setTimeout(() => {
        // Modify filterStates based on the fetched data
        // For example, if 'color' with value 'blue' should be checked:
        const updatedFilterStates = {
          ...filterStates,
          color: {
            ...filterStates.color,
            blue: true,
          },
        };
        setFilterStates(updatedFilterStates);
      }, 1000); // Adjust the delay as needed
    }, []); // This effect runs once when the component mounts

    return (
      //   <div>
      //     {/* ... rest of your component code ... */}
      //     {filters.options.map((section, optionIdx) => (
      //       <div key={option.value} className="flex items-center">
      //         <input
      //           id={`filter-${section.id}-${optionIdx}`}
      //           name={`${section.id}[]`}
      //           defaultValue={option.value}
      //           type="checkbox"
      //           checked={filterStates[section.id]?.[option.value] || false}
      //           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      //           onChange={() => filterHandler(section.id, option.value)}
      //         />
      //         <label
      //           htmlFor={`filter-${section.id}-${optionIdx}`}
      //           className="ml-3 text-sm text-gray-600"
      //         >
      //           {option.label}
      //         </label>
      //       </div>
      //     ))}
      //     {/* ... rest of your component code ... */}
      //   </div>

      <div>
        <h3 className="hidden lg:block text-lg font-bold text-gray-900 my-5">
          Filters
        </h3>
        <form className="hidden lg:block">
          {/* {console.log(filters)} */}
          {filters.map((section) => (
            <Disclosure
              as="div"
              key={section.id}
              className="border-b border-gray-200 py-6"
            >
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            // defaultChecked={option.checked}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            onChange={() =>
                              filterHandler(section.id, option.value)
                            }
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
          {singleFilters.map((section) => (
            //      Radio Buttons FROM MUI

            <Disclosure
              as="div"
              key={section.id}
              className="border-b border-gray-200 py-6"
            >
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      {/* </FormLabel> */}

                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <FormControl
                          sx={{
                            fontSize: "14px",
                            fontFamily: "ui-sans-serif",
                            color: "#374151",
                          }}
                        >
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            {section.options.map((option, index) => (
                              <FormControlLabel
                                key={index}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                                sx={{
                                  fontSize: "14px",
                                  fontFamily: "ui-sans-serif",
                                }}
                                onChange={() =>
                                  singleFilterHandler(section.id, option.value)
                                }
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </form>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Compare color and size props to control re-renders
    return (
      prevProps.color === nextProps.color && prevProps.size === nextProps.size
    );
  }
);

export default FilterOptions;
