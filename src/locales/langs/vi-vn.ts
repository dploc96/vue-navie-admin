const local: App.I18n.Schema = {
  system: {
    title: 'VueNaiveAdmin',
    updateTitle: 'Thông báo cập nhật phiên bản hệ thống',
    updateContent: 'Phát hiện phiên bản mới của hệ thống, bạn có muốn làm mới trang ngay bây giờ không?',
    updateConfirm: 'Làm mới ngay',
    updateCancel: 'Để sau',
  },
  common: {
    action: 'Hành động',
    add: 'Thêm mới',
    addSuccess: 'Thêm thành công',
    backToHome: 'Quay lại trang chủ',
    batchDelete: 'Xóa hàng loạt',
    cancel: 'Hủy',
    close: 'Đóng',
    check: 'Chọn',
    expandColumn: 'Mở rộng cột',
    columnSetting: 'Cài đặt cột',
    config: 'Cấu hình',
    confirm: 'Xác nhận',
    delete: 'Xóa',
    deleteSuccess: 'Xóa thành công',
    confirmDelete: 'Bạn có chắc chắn muốn xóa không?',
    edit: 'Chỉnh sửa',
    warning: 'Cảnh báo',
    error: 'Lỗi',
    index: 'Số thứ tự',
    keywordSearch: 'Nhập từ khóa tìm kiếm',
    logout: 'Đăng xuất',
    logoutConfirm: 'Bạn có chắc chắn muốn đăng xuất không?',
    lookForward: 'Hãy chờ đợi',
    modify: 'Sửa đổi',
    modifySuccess: 'Sửa đổi thành công',
    noData: 'Không có dữ liệu',
    operate: 'Vận hành',
    pleaseCheckValue: 'Vui lòng kiểm tra giá trị đã nhập có hợp lệ không',
    refresh: 'Làm mới',
    reset: 'Đặt lại',
    search: 'Tìm kiếm',
    switch: 'Chuyển đổi',
    tip: 'Gợi ý',
    trigger: 'Kích hoạt',
    update: 'Cập nhật',
    updateSuccess: 'Cập nhật thành công',
    userCenter: 'Trung tâm người dùng',
    yesOrNo: {
      yes: 'Có',
      no: 'Không',
    },
  },
  request: {
    logout: 'Đăng xuất người dùng sau khi yêu cầu thất bại',
    logoutMsg: 'Trạng thái người dùng hết hiệu lực, vui lòng đăng nhập lại',
    logoutWithModal: 'Đăng xuất người dùng sau khi yêu cầu thất bại và hiển thị hộp thoại',
    logoutWithModalMsg: 'Trạng thái người dùng hết hiệu lực, vui lòng đăng nhập lại',
    refreshToken: 'Yêu cầu mã thông báo đã hết hạn, làm mới mã thông báo',
    tokenExpired: 'Mã thông báo đã hết hạn',
  },
  theme: {
    themeSchema: {
      title: 'Chế độ chủ đề',
      light: 'Chế độ sáng',
      dark: 'Chế độ tối',
      auto: 'Theo hệ thống',
    },
    grayscale: 'Chế độ xám',
    colourWeakness: 'Chế độ màu yếu',
    layoutMode: {
      'title': 'Chế độ bố cục',
      'vertical': 'Chế độ menu bên trái',
      'vertical-mix': 'Chế độ menu bên trái kết hợp',
      'horizontal': 'Chế độ menu trên cùng',
      'horizontal-mix': 'Chế độ menu trên cùng kết hợp',
      'reverseHorizontalMix': 'Vị trí menu cấp 1 và menu cấp 2 đảo ngược',
    },
    recommendColor: 'Màu được đề xuất',
    recommendColorDesc: 'Thuật toán màu được đề xuất',
    themeColor: {
      title: 'Màu chủ đề',
      primary: 'Màu chính',
      info: 'Màu thông tin',
      success: 'Màu thành công',
      warning: 'Màu cảnh báo',
      error: 'Màu lỗi',
      followPrimary: 'Theo màu chính',
    },
    scrollMode: {
      title: 'Chế độ cuộn',
      wrapper: 'Cuộn ngoài',
      content: 'Cuộn nội dung',
    },
    page: {
      animate: 'Hiệu ứng chuyển trang',
      mode: {
        'title': 'Loại hiệu ứng chuyển trang',
        'fade-slide': 'Trượt',
        'fade': 'Hiện ra mờ dần',
        'fade-bottom': 'Mờ dần từ dưới lên',
        'fade-scale': 'Thu nhỏ mờ dần',
        'zoom-fade': 'Hiện ra từ từ',
        'zoom-out': 'Hiện ra nhanh',
        'none': 'Không có',
      },
    },
    fixedHeaderAndTab: 'Cố định tiêu đề và tab',
    header: {
      height: 'Chiều cao tiêu đề',
      breadcrumb: {
        visible: 'Hiển thị breadcrumb',
        showIcon: 'Hiển thị biểu tượng breadcrumb',
      },
    },
    tab: {
      visible: 'Hiển thị tab',
      cache: 'Lưu trữ trang tab',
      height: 'Chiều cao tab',
      mode: {
        title: 'Kiểu tab',
        chrome: 'Kiểu Chrome',
        button: 'Kiểu nút',
      },
    },
    sider: {
      inverted: 'Chế độ thanh bên tối',
      width: 'Chiều rộng thanh bên',
      collapsedWidth: 'Chiều rộng thanh bên khi thu gọn',
      mixWidth: 'Chiều rộng thanh bên chế độ kết hợp',
      mixCollapsedWidth: 'Chiều rộng thanh bên chế độ kết hợp khi thu gọn',
      mixChildMenuWidth: 'Chiều rộng menu con chế độ kết hợp',
    },
    footer: {
      visible: 'Hiển thị footer',
      fixed: 'Cố định footer',
      height: 'Chiều cao footer',
      right: 'Footer phía bên phải',
    },
    watermark: {
      visible: 'Hiển thị watermark toàn màn hình',
      text: 'Văn bản watermark',
    },
    themeDrawerTitle: 'Cấu hình chủ đề',
    pageFunTitle: 'Chức năng trang',
    configOperation: {
      copyConfig: 'Sao chép cấu hình',
      copySuccessMsg: 'Sao chép thành công, vui lòng thay thế biến themeSettings trong src/theme/settings.ts',
      resetConfig: 'Đặt lại cấu hình',
      resetSuccessMsg: 'Đặt lại thành công',
    },
  },
  route: {
    'login': 'Đăng nhập',
    '403': 'Không có quyền',
    '404': 'Trang không tồn tại',
    '500': 'Lỗi máy chủ',
    'iframe-page': 'Trang ngoài',
    'home': 'Trang chủ',
  },
  page: {
    login: {
      common: {
        loginOrRegister: 'Đăng nhập / Đăng ký',
        userNamePlaceholder: 'Vui lòng nhập tên người dùng',
        phonePlaceholder: 'Vui lòng nhập số điện thoại',
        codePlaceholder: 'Vui lòng nhập mã xác nhận',
        passwordPlaceholder: 'Vui lòng nhập mật khẩu',
        confirmPasswordPlaceholder: 'Vui lòng nhập lại mật khẩu',
        codeLogin: 'Đăng nhập bằng mã xác nhận',
        confirm: 'Xác nhận',
        back: 'Quay lại',
        validateSuccess: 'Xác thực thành công',
        loginSuccess: 'Đăng nhập thành công',
        welcomeBack: 'Chào mừng trở lại, {userName}!',
      },
      pwdLogin: {
        title: 'Đăng nhập',
        rememberMe: 'Ghi nhớ',
        forgetPassword: 'Quên mật khẩu?',
        register: 'Đăng ký',
        otherAccountLogin: 'Đăng nhập bằng tài khoản khác',
        otherLoginMode: 'Phương thức đăng nhập khác',
        superAdmin: 'Quản trị viên cấp cao',
        admin: 'Quản trị viên',
        user: 'Người dùng',
      },
      codeLogin: {
        title: 'Đăng nhập bằng mã xác nhận',
        getCode: 'Nhận mã xác nhận',
        reGetCode: 'Nhận lại mã sau {time} giây',
        sendCodeSuccess: 'Gửi mã xác nhận thành công',
        imageCodePlaceholder: 'Vui lòng nhập mã xác nhận hình ảnh',
      },
      register: {
        title: 'Đăng ký',
        agreement: 'Tôi đã đọc và chấp nhận',
        protocol: '《Thỏa thuận người dùng》',
        policy: '《Chính sách bảo mật》',
      },
      resetPwd: {
        title: 'Đặt lại mật khẩu',
      },
    },
    home: {
      branchDesc:
        'Để thuận tiện cho việc phát triển và hợp nhất cập nhật, chúng tôi đã rút gọn mã nguồn của nhánh main, chỉ giữ lại menu trang chủ, nội dung khác đã được chuyển sang nhánh example để bảo trì. Nội dung hiển thị trên địa chỉ xem trước là nội dung của nhánh example.',
      greeting: 'Chào buổi sáng, {userName}, hôm nay lại là một ngày tràn đầy năng lượng!',
      weatherDesc: 'Hôm nay có mây chuyển nắng, 20℃ - 25℃!',
      projectCount: 'Số dự án',
      todo: 'Công việc cần làm',
      message: 'Tin nhắn',
      downloadCount: 'Số lượt tải về',
      registerCount: 'Số lượt đăng ký',
      schedule: 'Lịch trình',
      study: 'Học tập',
      work: 'Công việc',
      rest: 'Nghỉ ngơi',
      entertainment: 'Giải trí',
      visitCount: 'Số lượt truy cập',
      turnover: 'Doanh thu',
      dealCount: 'Số lượng giao dịch',
      projectNews: {
        title: 'Tin tức dự án',
        moreNews: 'Xem thêm tin tức',
        desc1: 'Loic Duong đã tạo dự án mã nguồn mở vue-naive-admin vào ngày 28 tháng 5 năm 2024!',
        desc2: 'Loic Duong đã gửi một lỗi cho vue-naive-admin, thanh tab đa thẻ không tự động điều chỉnh.',
        desc3: 'Loic Duong đang chuẩn bị cho việc phát hành của vue-naive-admin!',
        desc4: 'Loic Duong vừa viết một số tài liệu giới thiệu dự án cho vue-naive-admin!',
        desc5: 'Loic Duong vừa viết một số nội dung tạm thời cho trang bàn làm việc của vue-naive-admin!',
      },
      creativity: 'Sáng tạo',
    },
  },
  form: {
    required: 'Không được để trống',
    userName: {
      required: 'Vui lòng nhập tên người dùng',
      invalid: 'Định dạng tên người dùng không đúng',
    },
    phone: {
      required: 'Vui lòng nhập số điện thoại',
      invalid: 'Định dạng số điện thoại không đúng',
    },
    pwd: {
      required: 'Vui lòng nhập mật khẩu',
      invalid: 'Định dạng mật khẩu không đúng, từ 6-18 ký tự, bao gồm chữ cái, số, dấu gạch dưới',
    },
    confirmPwd: {
      required: 'Vui lòng nhập lại mật khẩu',
      invalid: 'Hai mật khẩu không khớp',
    },
    code: {
      required: 'Vui lòng nhập mã xác nhận',
      invalid: 'Định dạng mã xác nhận không đúng',
    },
    email: {
      required: 'Vui lòng nhập email',
      invalid: 'Định dạng email không đúng',
    },
  },
  dropdown: {
    closeCurrent: 'Đóng',
    closeOther: 'Đóng các tab khác',
    closeLeft: 'Đóng các tab bên trái',
    closeRight: 'Đóng các tab bên phải',
    closeAll: 'Đóng tất cả',
  },
  icon: {
    themeConfig: 'Cấu hình chủ đề',
    themeSchema: 'Chế độ chủ đề',
    lang: 'Chuyển đổi ngôn ngữ',
    fullscreen: 'Toàn màn hình',
    fullscreenExit: 'Thoát toàn màn hình',
    reload: 'Làm mới trang',
    collapse: 'Thu gọn menu',
    expand: 'Mở rộng menu',
    pin: 'Ghim',
    unpin: 'Bỏ ghim',
  },
  datatable: {
    itemCount: 'Tổng {total} bản ghi',
  },
}

export default local
