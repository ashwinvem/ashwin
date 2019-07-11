#include<iostream>
using namespace std;
int Num;
int main(){
    cout<<"enter the number";
    cin>>Num;
    if(Num>0){
        cout<<"Positive";
    }
    else{
        cout<<"Negative";
    }
    else if(Num==0){
        cout<<"Zero"
    };
    return 0;
}
