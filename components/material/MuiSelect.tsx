import React, { useEffect } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            // width: 250
        },
    },
};

interface MuiSelectProps {
    placeholder: string;
    value?: string | any;
    selectOptions: string[] | any[];
    displayFn: (item: any) => string;
    onValueChange: (i: string | any) => void;
}

export function MuiSelect(props: MuiSelectProps) {

    const { placeholder, selectOptions, onValueChange } = props;
    const [selectedValue, setSelectedValue] = React.useState<string | any>(null);

    const handleChange = (event: SelectChangeEvent<typeof selectedValue>) => {
        const { target: { value } } = event;
        setSelectedValue(value);
    };

    useEffect(() => {
        onValueChange(selectedValue);
    }, [selectedValue]);

    return <>
        <FormControl sx={{ m: 1, width: 300 }} >
            <InputLabel id="Mui-Select">{placeholder}</InputLabel>
            <Select
                // labelId="demo-multiple-name-label"
                // id="demo-multiple-name"
                // multiple
                placeholder={placeholder}
                value={selectedValue || {}}
                onChange={handleChange}
                input={<OutlinedInput label={placeholder} placeholder={placeholder} />}
                MenuProps={MenuProps}
            >
                {selectOptions.map((item, itemIndex) => (
                    <MenuItem
                        key={itemIndex}
                        value={item}
                    // style={getStyles(item, selectedValue, theme)}
                    >
                        {props.displayFn(item)}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </>

}