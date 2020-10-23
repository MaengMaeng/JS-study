	private static void solution(int sizeOfMatrix, int[][] matrix) {
		int[][] visit = new int[sizeOfMatrix][sizeOfMatrix];
		
		ArrayList<Integer> al = new ArrayList<Integer>();
		
		for(int x = 0; x < sizeOfMatrix; x++) {
			for(int y = 0; y < sizeOfMatrix; y++) {
				if(visit[x][y] == 0 && matrix[x][y] == 1) al.add(findLand(x, y, visit, matrix));
			}
		}
		
		al.sort((a,b) -> a-b);

		System.out.println(al.size());
		for(int i : al) {			
			System.out.print(i + " ");
		}
	}
	
	public static int findLand(int x, int y, int[][] visit, int[][] matrix) {
		try {
			if(visit[x][y] == 1 || matrix[x][y] == 0) {
				return 0;
			}
		}
		catch(Exception e) { return 0; }
		
		visit[x][y] = 1;

		return 1 + findLand(x - 1, y, visit, matrix) + findLand(x + 1, y, visit, matrix)
            + findLand(x, y - 1, visit, matrix) + findLand(x, y + 1, visit, matrix);
	}