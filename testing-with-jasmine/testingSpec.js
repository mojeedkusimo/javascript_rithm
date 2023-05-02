describe("replaceWith", function () {

  it("returns_a_string", function () {
    expect(typeof replaceWith("Foo", "F", "B")).toBe("string");
    expect(typeof replaceWith("awesome", "e", "z")).toBe("string");
    expect(typeof replaceWith("attitude", "t", "u")).toBe("string");
  });

  it("returns_a_string_with_changed_value", function () {
    expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
    expect(replaceWith("Foo", "F", "B")).toBe("Boo");
    expect(replaceWith("attitude", "t", "u")).toBe("auuiuude");
  });

  it("returns_same_length_with_initial_string", function () {
    expect(replaceWith("awesome", "e", "z").length).toEqual(7);
    expect(replaceWith("Foo", "F", "B").length).toEqual(3);
    expect(replaceWith("attitude", "t", "u").length).toEqual(8);
  });

})


describe("expand", function () {

  it("returns_an_array", function () {
    expect(Array.isArray(expand([1, 2, 3], 3))).toBe(true);
    expect(Array.isArray(expand(["foo", "test"], 1))).toBe(true);
  });

  it("returns_an_array_with_elements_repeated_based_on_count_inputted", function () {
    expect(expand([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    expect(expand(["foo", "test"], 1)).toEqual(["foo", "test"]);
  });

  it("returns_an_array_with_elements_of_thesame_data_type", function () {
    expect(typeof expand([1, 2, 3], 3)[0]).toEqual(typeof [1, 2, 3][0]);
    expect(typeof expand(["foo", "test"], 1)[0]).toEqual(typeof ["foo", "test"][0]);
  });

})


describe("acceptNumbersOnly", function () {

  it("returns_a_boolean", function () {
    expect(typeof acceptNumbersOnly(1, "foo")).toBe("boolean");
    expect(typeof acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe("boolean");
    expect(typeof acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe("boolean");
  });

  it("returns_true_if_all_arguments_are_of_type_number_or_otherwise_false", function () {
    expect(acceptNumbersOnly(1, "foo")).toBe(false);
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true);
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, [])).toBe(false);
    expect(acceptNumbersOnly(1, 2, 3, {})).toBe(false);
  });

  it("returns_false_if_arguments_include_NaN", function () {
    expect(acceptNumbersOnly(1, 2, 3, NaN)).toBe(false);
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7, 8, 9, NaN)).toBe(false);
    expect(acceptNumbersOnly(NaN)).toBe(false);
  });

})


describe("mergeArrays", function () {

  it("returns_an_array", function () {
    expect(Array.isArray(mergeArrays([2, 1], [3, 4]))).toBe(true);
  });

  it("returns_a_sorted_array", function () {
    expect(mergeArrays([2, 1], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("returns_an_array_of_length_equal_to_sum_of_length_of_individual_arrays_passed", function () {
    expect(mergeArrays([2, 1], [3, 4]).length).toEqual(4);
  });

})


describe("mergeObjects", function () {

  it("returns_a_non_array_value", function () {
    expect(Array.isArray(mergeObjects({
      name: "Foo",
      num: 33
    }, {
      test: "thing",
      num: 55
    }))).toBe(false);
  });

  it("returns_an_object", function () {
    expect(typeof mergeObjects({
      name: "Foo",
      num: 33
    }, {
      test: "thing",
      num: 55
    })).toBe("object");
  });

  it("returns_an_object_with_properties_of_both_objects_passed_merged_together", function () {
    expect(mergeObjects({
      name: "Foo",
      num: 33
    }, {
      test: "thing",
      num: 55
    })).toEqual({
      name: "Foo",
      test: "thing",
      num: 55
  });
  });

})