#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    if (a > b) printf ("a > b\n");
    else if (a < b) printf ("a < b\n");
    else printf ("a == b\n");
    return 0;
}

#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    int ans = a + b;
    cout << ans << endl;
    return 0;
}

#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b = 0;
    cin >> a;
    for (int i = 1; i <= a; i++) {
        b += i;
    }
    cout << b << endl;
    return 0;
}