function phoneBook(input) {
    let phone = {};
    for (const line of input) {
        let [name,number] = line.split(' ')
        phone[name] = number;
        
    }
    for (const key in phone) {
       console.log(`${key} -> ${phone[key]}`);
    }
    
    
}
phoneBook(['Tim 0834212554','Peter 0877547887',
'Bill 0896543112','Tim 0876566344'])
phoneBook(['George 0552554',
'Peter 087587','George 0453112',
'Bill 0845344'])