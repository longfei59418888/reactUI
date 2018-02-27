import React from 'react';

export function select(props){
    return <Picker
    dataSource={[
      { value: '1', label: '选项一' },
      { value: '2', label: '选项二' },
    ]}
    value={single.value}
    onOk={(selected) => {
      single.value = selected.value;
      this.setState({
        single,
      });
      console.log(`selected ${single.value}`);
    }}
    onCancel={() => {
    }}
    />
}