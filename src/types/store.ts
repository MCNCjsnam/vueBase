// 로그인 사용자 정보 타입 정의
export interface StoreState {
    userInfo: UserInfo;
}

// UserInfo 타입 정의
export type UserInfo = {
    userId: string;
};
