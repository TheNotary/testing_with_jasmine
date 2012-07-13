describe("The dog tests", function(){
  var dog;
  
  beforeEach(function(){
    dog = new Dog();
  });
  
  it("should be able to bark on command", function(){
    expect(dog.bark()).toEqual("woof!");
  });
});