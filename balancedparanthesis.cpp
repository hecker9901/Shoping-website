#include<iostream>
using namespace std;
void balancedparanthesesis(char *a,int i,int n,int open,int close){
    if(i==2*n){
        a[i]='\0';
        cout<<a<<endl;
        return ;
    }
    
    if(open<n){
        a[i]='(';
        balancedparanthesesis(a,i+1,n,open+1,close);
    }
    if(close<open){
        a[i]=')';
        balancedparanthesesis(a,i+1,n,open,close+1);
    }
}
int main(){
    char a[100];
    int n;
    cin>>n;
    balancedparanthesesis(a,0,n,0,0);
}