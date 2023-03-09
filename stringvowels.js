const college = 'Maharaja institute of technology';

let ans='';
function vowels() {
    for(let i=0;i<college.length;i++){
        if(isVowel(college[i]))
        ans+=college[i];
    }

}

 
function isVowel(ch) {
    switch(ch){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }

}
 vowels();

console.log(ans);