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