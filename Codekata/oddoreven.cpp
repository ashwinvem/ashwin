#include<iostream>
using namespace std;
int Num;
int main(){
    cout<<"enter the number";
    cin>>Num;
    if(Num>0){
        cout<<"positive";
    }
    else{
        cout<<"negative";
    }
    else if(Num==0){
        cout<<"zero"
    };
    return 0;
}
