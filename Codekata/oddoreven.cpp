#include<iostream>
using namespace std;
int Num;
int main(){
   
    cin>>Num;
    if(Num>0){
        cout<<"Positive";
    }
     else if(Num==0){
        cout<<"Zero";
    }
    else{
        cout<<"Negative";
    }
   
    return 0;
}
