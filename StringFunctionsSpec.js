describe("String functions", function() {
  it("returns the length of a string correctly", function() {
    expect(len("")).toBe(0);
    expect(len("abc")).toBe(3);
    expect(len("Foo 123!")).toBe(8);
  });
  it("title for next test", function() {
    expect(2+2).toBe(4);
  });
  it("title for next next test", function() {
    expect(2+2).not.toBe(3);
  });
  it("title for concatenate test", function() {
    expect (concatenate("co","der")).toBe("coder");
  });
  it("title for left test", function() {
    expect (left("cherries",5)).toBe("cherr");
  });
  it("title for right test", function() {
    expect (right("cherries",7)).toBe("herries");
  });
  it("title for find test", function() {
    expect (find("three", "one, two, three, four", 1)).toBe(10);
  });
  it("title for search test", function() {
    expect (search("cODeR", "Top Coder!", 1)).toBe(4);
  });
  it("title for mid test", function() {
    expect (mid("beetlejuice", 3, 5)).toBe("tleju");
  });
  it("title for replace test", function() {
    expect (replace("beetlejuice",0,5,"apple")).toBe("appleejuice");
  });
  it("title for substitute test", function() {
    expect (substitute("marinara sauce","sau","sow")).toBe("marinara sowce");
  });
  it("title for getFunctionName test", function() {
    expect (getFunctionName("QUOTIENT(15,4)")).toBe("QUOTIENT");
  });
  it("title for removeArgs test", function() {
    expect (removeArgs(("foo,12345,bar,molloy,A2"),3)).toBe("molloy,A2");
  });
  it("title for getArgNum test", function() {
    expect (getArgNum(3,"foo,12345,bar,molloy,A2")).toBe("bar");
  });
  it("title for getFinalArg test", function() {
    expect (getFinalArg("foo,12345,bar,molloy,A2")).toBe("A2");
  });
  it("title for removeEnds test", function() {
    expect (removeEnds("jelly")).toBe("ell");
  });
});
