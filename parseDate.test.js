const { format } = require("date-fns");

test("test y" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'y')).toBe('2009');
});

test("test yo" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'yo')).toBe('2009th');
});

test("test yy" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'yy')).toBe('09');
});

test("test yyy" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'yyy')).toBe('2009');
});

test("test yyyy" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'yyyy')).toBe('2009');
});

test("test M" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'M')).toBe('11');
});

test("test Mo" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'Mo')).toBe('11th');
});

test("test MM" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'MM')).toBe('11');
});

test("test MMM" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'MMM')).toBe('Nov');
});

test("test MMMM" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'MMMM')).toBe('November');
});

test("test MMMMM" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'MMMMM')).toBe('N');
});

test("test d" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'd')).toBe('5'); 
});

test("test do" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'do')).toBe('5th');
});

test("test dd" , ()=>{
    expect(format(new Date(2009 , 10 , 5) , 'dd')).toBe('05');
});
