
function test_toggle_root_computed_values(property) {
  test_computed_value(property, 'none');
  test_computed_value(property, 'sticky sticky');
  test_computed_value(property, 'group group');
  test_computed_value(property, 'self self');
  test_computed_value(property, 'mytoggle');
  test_computed_value(property, 'mytoggle, yourtoggle');
  test_computed_value(property, 'mytoggle, mytoggle');
  test_computed_value(property, 'mytoggle 3 at 0 sticky self, yourtoggle 1 group self', 'mytoggle 3 sticky self, yourtoggle group self');
  test_computed_value(property, 'mytoggle 3 at 1 sticky self, yourtoggle 2 group self');
  test_computed_value(property, 'mytoggle 1 at 0', 'mytoggle');
  test_computed_value(property, 'mytoggle 1 at +0', 'mytoggle');
  test_computed_value(property, 'mytoggle +1 at 0', 'mytoggle');
  test_computed_value(property, 'mytoggle 1 at -0', 'mytoggle');
  test_computed_value(property, 'mytoggle +1 at 2', 'mytoggle 1 at 2');
  test_computed_value(property, 'mytoggle 1 at calc(-3)', 'mytoggle');
  test_computed_value(property, 'mytoggle calc(-3) at 0', 'mytoggle');
  test_computed_value(property, 'mytoggle 7 at calc(-3)', 'mytoggle 7');
  test_computed_value(property, 'mytoggle calc(-3) at 7', 'mytoggle 1 at 7');
  test_computed_value(property, 'mytoggle calc(9) at calc(6)', 'mytoggle 9 at 6');
  test_computed_value(property, 'mytoggle calc(9.6) at calc(6.4)', 'mytoggle 10 at 6');
  test_computed_value(property, 'mytoggle calc(-9.5) at calc(6.5)', 'mytoggle 1 at 7');
  test_computed_value(property, 'mytoggle group sticky self, yourtoggle self sticky', 'mytoggle sticky group self, yourtoggle sticky self');
  test_computed_value(property, 'mytoggle group 2 at 1', 'mytoggle 2 at 1 group');
  test_computed_value(property, 'mytoggle [one two three]');
  test_computed_value(property, 'mytoggle [one two three] at 0', 'mytoggle [one two three]');
  test_computed_value(property, 'mytoggle [ one two three ] at 0', 'mytoggle [one two three]');
  test_computed_value(property, 'mytoggle[one two three]at 0', 'mytoggle [one two three]');
  test_computed_value(property, 'mytoggle [one two three] at 1');
  test_computed_value(property, 'mytoggle [ one two three ] at 1', 'mytoggle [one two three] at 1');
  test_computed_value(property, 'mytoggle[one two three]at 1', 'mytoggle [one two three] at 1');
  test_computed_value(property, 'mytoggle [ one two three ] at two', 'mytoggle [one two three] at two');
  test_computed_value(property, 'mytoggle 3 at two');
}

function test_toggle_root_valid_values(property) {
  test_valid_value(property, 'none');
  test_valid_value(property, 'sticky sticky');
  test_valid_value(property, 'group group');
  test_valid_value(property, 'self self');
  test_valid_value(property, 'mytoggle');
  test_valid_value(property, 'mytoggle, yourtoggle');
  test_valid_value(property, 'mytoggle, mytoggle');
  test_valid_value(property, 'mytoggle 3 at 0 sticky self, yourtoggle 1 group self');
  test_valid_value(property, 'mytoggle 1 at 0');
  test_valid_value(property, 'mytoggle 1 at +0', 'mytoggle 1 at 0');
  test_valid_value(property, 'mytoggle +1 at 0', 'mytoggle 1 at 0');
  test_valid_value(property, 'mytoggle 1 at -0', 'mytoggle 1 at 0');
  test_valid_value(property, 'mytoggle 1 at calc(-3)');
  test_valid_value(property, 'mytoggle calc(-3) at 0');
  test_valid_value(property, 'mytoggle 7 at calc(-3)');
  test_valid_value(property, 'mytoggle calc(-3) at 7');
  test_valid_value(property, 'mytoggle calc(9) at calc(6)');
  test_valid_value(property, 'mytoggle calc(9.6) at calc(6.4)');
  test_valid_value(property, 'mytoggle calc(-9.5) at calc(6.5)');
  test_valid_value(property, 'mytoggle group sticky self, yourtoggle self sticky', 'mytoggle sticky group self, yourtoggle sticky self');
  test_valid_value(property, 'mytoggle group 2 at 1', 'mytoggle 2 at 1 group');
  test_valid_value(property, 'mytoggle [one two three]');
  test_valid_value(property, 'mytoggle [one two three] at 0');
  test_valid_value(property, 'mytoggle [ one two three ] at 0', 'mytoggle [one two three] at 0');
  test_valid_value(property, 'mytoggle[one two three]at 0', 'mytoggle [one two three] at 0');
  test_valid_value(property, 'mytoggle [ one two three ] at two', 'mytoggle [one two three] at two');
  test_valid_value(property, 'mytoggle 3 at two');
}

function test_toggle_root_invalid_values(property) {
  test_invalid_value(property, 'none 1');
  test_invalid_value(property, 'none sticky');
  test_invalid_value(property, 'none cycle');
  test_invalid_value(property, 'none cycle-on');
  test_invalid_value(property, 'none group');
  test_invalid_value(property, 'none self');
  test_invalid_value(property, 'None self');
  test_invalid_value(property, 'NONE self');
  test_invalid_value(property, 'mytoggle sticky sticky');
  test_invalid_value(property, 'mytoggle group group');
  test_invalid_value(property, 'mytoggle self self');
  test_invalid_value(property, 'none sticky sticky');
  test_invalid_value(property, 'none group group');
  test_invalid_value(property, 'none self self');
  test_invalid_value(property, 'none, mytoggle');
  test_invalid_value(property, 'mytoggle, none');
  test_invalid_value(property, 'mytoggle 1 at');
  test_invalid_value(property, 'mytoggle []');
  test_invalid_value(property, 'mytoggle [one] at');
  test_invalid_value(property, 'mytoggle [one two two three]');
  test_invalid_value(property, 'mytoggle [one two one three]');
  test_invalid_value(property, 'mytoggle 0 sticky self');
  test_invalid_value(property, 'mytoggle 0 at 0 sticky self');
  test_invalid_value(property, 'mytoggle -1 at 1 sticky self');
  test_invalid_value(property, 'mytoggle 1 at -1 sticky self');
  test_invalid_value(property, 'mytoggle -1 at -1 sticky self');
  test_invalid_value(property, 'mytoggle -1 at 0');
  test_invalid_value(property, 'mytoggle 0 at 0');
  test_invalid_value(property, 'mytoggle -0 at 0');
  test_invalid_value(property, 'mytoggle +0 at 0');
  test_invalid_value(property, 'mytoggle sticky 3 at 1 group self sticky');
  test_invalid_value(property, 'mytoggle sticky 3 at 1 group self group');
  test_invalid_value(property, 'mytoggle sticky 3 at 1 group self self');
  test_invalid_value(property, 'mytoggle sticky 3 at 1 group self 1');
  test_invalid_value(property, 'mytoggle sticky group at 1');
  test_invalid_value(property, 'mytoggle sticky group at 1 1');
}
