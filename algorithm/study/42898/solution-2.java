class Solution {
    public int solution(int m, int n, int[][] puddles) {        
        int[][] dp = new int[m+1][n+1];
        
        for(int i = 0; i < m; i++) {
        	for(int j = 0; j < n; j++) {
        		dp[i][j] = 0;
        	}
        }
        
        dp[1][1] = 1;
        
        for(int[] puddle : puddles) {
        	dp[puddle[0]][puddle[1]] = -1;
        }
        
        for(int i = 1; i <= m; i++) {
        	for(int j = 1; j <= n; j++) {
        		if(dp[i][j] != -1) {
        			dp[i][j] += ((dp[i - 1][j] == -1 ? 0 : dp[i - 1][j]) + (dp[i][j - 1] == -1 ? 0 : dp[i][j - 1])) % 1000000007;
        		}
        	}
        }
        
        return dp[m][n];
    }
}