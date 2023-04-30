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
        expect(Array.isArray(expand([1,2,3],3))).toBe(true);
        expect(Array.isArray(expand(["foo", "test"],1))).toBe(true);
    });

    it("returns_an_array_with_elements_repeated_based_on_count_inputted", function () {
      expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3]);
      expect(expand(["foo", "test"],1)).toEqual(["foo","test"]);
    });

    it("returns_an_array_with_elements_of_thesame_data_type", function () {
      expect(typeof expand([1,2,3],3)[0]).toEqual(typeof [1,2,3][0]);
      expect(typeof expand(["foo", "test"],1)[0]).toEqual(typeof ["foo","test"][0]);
    });
  
  })