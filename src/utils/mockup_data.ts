// export interface ITopic {
//   id: number;
//   title: string;
// }
export const topic: any[] = [
  {
    id: 1,
    title: 'Sơ cứu đuối nước',
  },
  {
    id: 2,
    title: 'Bạo lực học đường',
  },
  {
    id: 3,
    title: 'Bảo vệ bản thân khi có kẻ lạ đột nhập vào nhà',
  },
  {
    id: 4,
    title: 'Kĩ năng an toàn khi chơi cùng động vật',
  },
  {
    id: 5,
    title: 'Kĩ năng sơ cấp cứu',
  },
  {
    id: 6,
    title: 'Phòng tránh xâm hại tình dục',
  },
  {
    id: 7,
    title: 'Tránh bắt cóc',
  },
  {
    id: 8,
    title: 'Tự chăm sóc bản thân khi bị ốm lúc bố mẹ vắng nhà',
  },
  {
    id: 9,
    title: 'Xử lí tình huống khi bị lạc',
  },
  {
    id: 10,
    title: 'Đảm bảo an toàn khi tham gia giao thông',
  },
  {
    id: 11,
    title: 'Kĩ năng ứng phó với người lạ',
  },
  {
    id: 12,
    title: 'Kỹ năng xử lí hỏa hoạn',
  },
  {
    id: 13,
    title: 'Quy tắc 5 ngón tay',
  },
];

export interface IDetail {
  id: number;
  image?: any;
  title: string;
  content: string[];
}
export interface IDetailTopic {
  [key: number]: IDetail[];
}

export const detail_topic: IDetailTopic = {
  1: [
    {
      id: 1,
      title: 'Việc đi lạc ở trẻ nhỏ là gì?',
      content: [
        'Một số trẻ em bị lạc khi cha mẹ cho đi chơi ở công viên, siêu thị, lễ hội, đi du lịch… là những nơi rộng rãi, có khi là lạ lẫm với trẻ và rất đông người. Trẻ bị lạc do mải nhìn thứ thích, có khi trẻ dừng  lại lâu ở chỗ có đồ chơi, trò chơi hấp dẫn, hoặc do cha mẹ không nắm tay trẻ đi cùng.',
      ],
    },
    {
      id: 2,
      title: 'Nguyên nhân dẫn đến đi lại ở các bạn nhỏ.',
      content: [
        'Do sự lơ là mất cảnh giác của bố mẹ.',
        'Do bé bị cám dỗ nơi chốn đông người và lạc lúc nào không hay.',
        'Do bản tính hiếu động, tò mò, nên trẻ rất dễ bị lạc khi đi cùng cha mẹ hoặc người thân đến những nơi đông người như chợ, siêu thị, công viên, trung tâm giải trí…',
      ],
    },
    {
      id: 3,
      title: 'Cách ứng xử khi bị đi lạc.',
      content: [
        'Vì bố mẹ khi không thấy bạn sẽ lập tức quay lại chỗ cũ để tìm bạn nên khi bạn bị lạc, bạn không cần chạy đi khắp nơi tìm bố mẹ.Bạn chỉ cần đứng yên một chỗ, nhờ người lớn gọi điện thoại hoặc nhờ người lớn tìm sự giúp đỡ.',
        'Bình tĩnh, không được khóc vì khóc sẽ gây chú ý với những kẻ xấu, nên đứng yên một chỗ để quan sát và tìm kiếm sự giúp đỡ, nhưng tuyệt đối không đi theo người lạ.',
        'Nói KHÔNG với người lạ. Đặc biệt cẩn trọng với những người lạ cứ dụ cho bé ăn quà, cho quà, dụ bé đi theo hay nhờ bé giúp làm một việc gì đó.',
        'La hét hoặc thét lên nếu bị người lạ lôi kéo, dắt đi. Hét lên “Cứu với”, “Cháu không biết cô/ chú” để thu hút sự chú ý của người xung quanh nếu thấy gần đó có người, những người xung quanh sẽ nhận thấy sự khác thường và can thiệp.',
        'Chạy thật nhanh đến chỗ có nhiều người lớn gần đó. Tìm đến những người có mặc đồng phục, đeo bảng tên, đó là những người làm việc tại công viên hay cửa hàng… Tìm các chú công an, bảo vệ của trung tâm hay các bố mẹ đi cùng con nhỏ để nhờ giúp, họ có thể gọi loa để giúp các bạn tìm bố mẹ.',
      ],
    },
    {
      id: 4,
      title: 'Các biện pháp phòng ngừa khi đi lạc',
      content: [
        'Khi các bạn cùng bố mẹ đi vào những nơi đông người như ( công viên, siêu thị hay trung tâm thương mại,…), các bạn phải nhớ luôn nắm chặt tay bố mẹ vì ở những nơi đông người như vậy rất dễ bị lạc bố mẹ nhé.',
        'Các bạn hãy  ghi nhớ số điện thoại của bố mẹ, nhớ địa chỉ nhà và thường xuyên nhắc lại hàng ngày để kiểm tra để phòng khi bạn bị lạc nhé!',
        'Nếu các bạn dưới 6 tuổi cách tốt nhất là hãy luôn đem theo bên mình một mảnh giấy ghi tên và số điện thoại của bố mẹ và của một người thân khác có thể liên lạc trong trường hợp khẩn cấp. Tờ giấy này bạn phải cất kỹ và chỉ đưa cho người có trách nhiệm, có thể giúp bạn.',
        'Nếu bạn đã lớn hơn một chút, hãy định ra một nơi dễ nhận biết để tập trung lại trong trường hợp bị lạc nhau.',
        'Nếu trong trường hợp bạn còn quá nhỏ hoặc không thể nhớ nổi số điện thoại của bố mẹ, địa chỉ nhà hãy viết một mẩu giấy nhỏ có ghi tên số điện thoại của bố mẹ và địa chỉ nhà mình và luôn mang bên mình để phòng trường hợp đi lạc sẽ sử dụng đến.',
      ],
    },
  ],
  2: [
    {
      id: 1,
      image: require('assets/images/baoluc/concept.png'),
      title: 'Bạo lực học đường là gì?',
      content: [
        'Bạo lực học đường là hành vi hành hạ, ngược đãi, đánh đập; xâm hại thân thể, sức khỏe; lăng mạ, xúc phạm danh dự, nhân phẩm; cô lập, xua đuổi và các hành vi cố ý khác gây tổn hại về thể chất, tinh thần của người học xảy ra trong môi trường học đường như tại trường học hoặc trong lớp học.',
      ],
    },
    {
      id: 2,
      image: require('assets/images/baoluc/formal.png'),
      title: 'Có mấy hình thức bạo lực học đường?',
      content: [
        'Bạo lực về thể chất: Các hành vi đánh đập, bứt tóc, xô đẩy, cắt tóc, xé quần áo, đổ đồ ăn lên người, trấn lột cướp đồ giữa các bạn học sinh.',
        'Bạo lực bằng lời nói: Sử dụng những hành vi hoặc lời nói gây xúc phạm, gán ghép hoặc bôi nhọ, sỉ nhục, chế nhạo hoặc bắt người khác làm theo ý mình. Hành vi này có thể ở giáo viên đối với học sinh hoặc học sinh với nhau.',
        'Bạo lực tâm lý: Là hành động xâm phạm tình dục, có thể động chạm những bộ phận nhạy cảm hoặc thậm chí có những hành vi cưỡng ép tình dục, hiếp dâm, … Hành vi này xảy ra giáo viên đối với học sinh hoặc học sinh với nhau',
        'Bạo lực xã hội: Phân biệt đối xử, cô lập, tẩy chay, nói xấu, bêu rếu xung quanh hay thậm chí là trên mạng xã hội.',
        'Bạo lực điện tử: Là hành vi uy hiếp bằng các phương tiện điện tử như gọi điện, nhắn tin, đe dọa và bêu rếu người nào đó trên mạng xã hội.',
      ],
    },
    {
      id: 3,
      image: require('assets/images/baoluc/reason.png'),
      title: 'Nguyên nhân của bạo lực học đường',
      content: [
        'Tình trạng bạo lực học đường diễn ra ở môi trường học tập chủ yếu ở độ tuổi 12-17 tuổi. Đây là độ tuổi thay đổi tâm sinh lý của của học sinh – độ tuổi vô cùng nhạy cảm. Bản thân các em chưa làm chủ được nhận thức và hành động của bản thân dẫn đến dễ cáu gắt, bực tức và có những hành vi gây bạo lực học đường.',
        'Nhiều bạn sống trong những gia đình có nhiều mâu thuẫn nên gây ảnh hưởng không nhỏ đến tâm lí của các bạn. Hoặc do bố mẹ quá bận rộn, không có thời gian quan tâm tới con cái, thậm chí vì áp lực cuộc sống hay trút giận lên chính đứa con của mình.',
        'Hiện nay, nhiều trường học chỉ chú trọng đào tạo giáo dục về kiến thức sách vở mà ko để ý giáo dục nhân cách, kĩ năng cư xử phẩm chất cho học sinh. Hoặc khi có bạo lực không có hướng giải quyết triệt để và các biện pháp răn đe phù hợp nên học sinh không sợ.',
        'Do đây là thời đại 4.0, internet phát triển mạnh mẽ, nguồn thông tin không được kiểm duyệt. Văn hóa bạo lực trong các bộ phim ảnh, sách báo và các trò chơi, game mang xu hướng bạo lực tràn lan trên mạng và không được kiểm duyệt đàng hoàng dẫn đến những đối tượng ở độ tuổi vị thành niên này bị tò mò và tiếp xúc nên có tâm lý bạo hành học đường ở ngoài đời.',
        'Do biến chất về mặt tâm lý. Nhiều học sinh, giáo viên suy thoái đạo đức nghề nghiệp, có những cách nhìn nhận méo mó, lệch lạc biến thái.',
      ],
    },
    {
      id: 4,
      image: require('assets/images/baoluc/prevent.png'),
      title: 'Các cách phòng tránh bạo lực học đường',
      content: [
        'Các bạn cần có ý thức rèn luyện và tìm hiểu, nâng cao ý thức về hành động cũng như hậu quả của những hành động bạo lực tại trường, lớp.',
        'Các bạn nên tích cực rèn luyện kĩ năng sống, luôn ngoan ngoãn lễ phép với ông bà, bố mẹ, với thầy cô giáo nhé!',
        'Chấp hành tốt nội quy trường lớp cùng là một giải pháp hiệu quả để giúp chúng ta tránh xa bạo lực học đường đó nha!',
        'Chúng ta cần tránh xa bạo lực và nói không với các hành động mang tính bạo lực.',
        'Nếu xung quanh bạn có các hiện tượng bạo lực hay bạn của bạn hoc các hành động mang tính bạo lực như giật túm tóc, giấu sách vở, có các hành động gây thương tích cho bạn hay các bạn xung quanh, bạn không nên im lặng chịu đựng mà phải kịp thời báo ngay cho nhà trường, thầy cô giáo hoặc bố mẹ của bạn. Thầy cô và ba mẹ sẽ bảo vệ và kịp thời đưa ra các giải pháp để giúp đỡ bạn nhé!',
        'Các bạn nên học cách kiềm chế cảm xúc của bản thân, không được vì nóng giận tức thời mà có các cách hành động bạo lực với bạn bè nha!',
        'Bạn nên tích cực tham gia vào các hoạt động tình nguyện mà nhà trường tổ chức nhằm tăng tính thiện và tính hướng thiện, việc này cũng giúp các bạn có thể hòa nhập và thân thiết hơn với bạn bè nữa đó!',
      ],
    },
    {
      id: 5,
      image: require('assets/images/baoluc/harm.png'),
      title: 'Tác hại của bạo lực học đường:',
      content: [
        'Ảnh hưởng của bạo lực học đường đối với học sinh: Ảnh hưởng tiêu cực đến tâm lý, sức khỏe và kết quả học tập.',
        'Ảnh hưởng đến gia đình: Không khí và cuộc sống gia đình bị xáo trộn, căng thẳng, lo lắng.',
        'Ảnh hưởng đến nhà trường: Khiến cho không khí trường học trở nên nặng nề, căng thẳng với nỗi sợ hãi, bất an luôn bao trùm; những hành vi bạo lực học đường của học sinh sẽ trở thành nỗi bất an của phụ huynh khi gửi con đến trường, làm mất đi ý nghĩa của môi trường giáo dục lành mạnh, trong sáng.',
        'Ảnh hưởng đến xã hội:Ảnh hưởng đến những nét văn hóa truyền thống, những chuẩn mực đạo đức quý giá; thể hiện một sự suy đồi về mặt đạo đức và sự sai lệch về mặt hành vi một cách đáng báo động.',
      ],
    },
  ],
  3: [
    {
      id: 1,
      title: 'Các dấu hiệu nhận biết có kẻ trộm đột nhập nhà bạn:',
      content: [
        'Cửa sổ bị vỡ: Một số kẻ trộm thường dùng đá ném vào cửa sổ để xem có người ở nhà không hoặc để kiểm tra xem nhà chúng ta có lắp đặt hệ thống báo trộm không. Vì vậy, cách nhận biết trộm vào nhà là hãy kiểm tra tất cả cửa kính nhé!',
        `Cửa ra vào có dầu hiệu bất thường: như có nhiều vết xước, có dấu hiệu bị cạy mở hoặc bị mở tung (trong trường hợp trước đó bố mẹ bạn hoặc bạn đã đóng cửa cẩn thận).
        Đây là cách nhận biết trộm vào nhà dễ nhận thấy nhất vì cửa nhà nơi ra vào, vì vậy khi thấy điều này hãy ngay lập tức tìm cách thông báo cho người lớn để tìm kiếm sự giúp đỡ nhé!
        `,
        `Nhận được cuộc gọi lạ: Gọi điện thoại đến nhà cũng là cách kẻ trộm đoán biết được nhà bạn đang có ai ở nhà không. Nếu bạn bắt máy chúng sẽ tìm hiểu thông tin từ bạn, vì vậy các bạn luôn phải cảnh giác với các cuộc gọi từ người lạ lúc bố mẹ vắng nhà, không nên cung cấp quá nhiều thông tin cho chúng, đặc biệt, không nên để lộ rằng bạn đang ở nhà một mình hoặc các thông tin như địa chỉ cụ thể của nhà bạn, thời gian bố mẹ ra khỏi nhà và trở về nhà.`,
        'Không mở cửa cho người lạ: Khi bạn đang ở nhà một mình, nếu không phải người mà bạn quen thân trước đó, tuyệt đối không được mở cửa cho người đó vào nhà, không nhận đồ ăn, quà hay bất kỳ thứ gì mà người lạ đưa cho bạn kể cả người đó có tự nhận mình là người quen của bố mẹ bạn',
      ],
    },
    {
      id: 2,
      title: 'Các hành động không nên làm khi có kẻ trộm đột nhập vào nhà',
      content: [
        'Tuyệt đối không được la hét: La hét sẽ là hành động gây nguy hiểm cho chính bản thân bạn vì mục đích của kẻ trộm đột nhập vào nhà là để cướp tài sản, nếu bạn hô to, khóc lóc kêu cứu sẽ khiến bọn cướp kích động và có các hành động gây hại đến bạn.',
        'Không được đánh đuổi bọn trộm: Hành động đánh đuổi hay chọc giận bọn trộm sẽ làm chúng kích động và có thể gây hại cho bạn và bạn cũng không đủ sức mạnh để chống trả. Thay vào đó bạn nên giả vờ ngoan ngoãn, im lặng tỏ vẻ đáng thương để tên trộm không gây thương tích.',
        'Thể hiện thái độ hợp tác với tên trộm: Bạn hãy nhớ rằng, tính mạng của mình mới quan trọng còn các tài sản khác có thể làm và kiếm lại được.  Nếu trộm yêu cầu bạn chỉ chỗ cất giấu tiền hoặc yêu cầu bạn giao ra tài sản, hãy đưa cho chúng hay chỉ chỗ cất giấu để chúng nhanh chóng rời khỏi.',
        'Không để lộ những hành động chống đối tên trộm: Bạn không nên nhìn chăm chú vào kẻ đột nhập điều này sẽ khiến kẻ trộm bất an vì chúng nghĩ rằng bạn đang cố ghi nhớ hình dáng chúng và sẽ gây nguy hiểm cho bạn. Tuyệt đối không được gọi điện thoại cầu cứu khi kẻ gian đang chú ý vì sẽ là hành động khiến chúng tức giận.',
        'Trong trường hợp tên trộm là người quen bạn phải vờ như không biết nếu không chúng có thể giết người để bịt đầu mối.',
      ],
    },
    {
      id: 3,
      title: 'Vậy bạn nên làm gì nếu phát hiện có kẻ gian đột nhập vào nhà',
      content: [
        'Giữ bình tĩnh, tránh hoảng loạn: Nếu chẳng may có kẻ gian đột nhập vào nhà bạn lúc bố mẹ không có ở nhà, bạn phải giữ bình tĩnh, tránh hoảng loạn, khóc lóc, la hét mà nên nghĩ cách bảo vệ an toàn cho bản thân.',
        'Nếu có thể bạn hãy tìm đến lối thoát hiểm gần nhất, thoát ra khỏi nhà và tìm kiếm sự giúp đỡ từ người lớn.',
        'Tìm chỗ trốn an toàn: Để đảm bảo an toàn cách tốt nhất bạn nên tìm chỗ trốn an toàn trong nhà khi phát hiện trộm đột nhập như gầm giường, tủ hoặc các căn phòng có thể khóa từ bên trong, dùng các vật nặng để chặn cửa.',
        'Nếu có điện thoại, bạn hãy gọi ngay cho 113 để cầu cứu, sau đó thông báo cho ba mẹ.',
      ],
    },
  ],
  4: [
    {
      id: 1,
      title: 'Những điều bạn nên lưu ý:',
      content: [
        'Không đến gần những con chó lạ, ngay cả khi nó trông thân thiện.',
        'Không nên trêu chọc chúng khi chúng đang ăn, ngủ hay đang chăm sóc con của chúng.',
        'Phải nói ngay cho người lớn biết nếu bắt gặp một con chó lạc.',
        'Chỉ được chơi đùa với chó khi có người lớn bên cạnh.',
        'Đừng bao giờ chọc tức chúng.',
        'Bạn  nên hỏi cha mẹ hoặc người đi cùng, nhất là chủ sở hữu của con chó nếu muốn vuốt ve nó.',
        'Không bao giờ lại gần, can thiệp vào 2 con chó đang cắn nhau',
      ],
    },
    {
      id: 2,
      title: 'Bạn phải làm gì nếu bị một con chó lạ đến gần',
      content: [
        'Không vừa chạy vừa la hét.',
        'Hãy đứng yên “như tượng”.',
        'Đừng nhìn thẳng vào mắt chúng.',
        'Nếu bị té ngã, hãy giả vờ như một khúc gỗ, khi con chó nghĩ rằng trẻ không phải là mối đe dọa của nó, nó sẽ bỏ đi.',
        'Nếu bị chó cắn, phải cho người lớn biết ngay',
      ],
    },
    {
      id: 3,
      title: 'Phải làm gì khi bị chó cắn',
      content: [
        'Bạn phải tuyệt đối bình tĩnh, nhanh chóng rửa vết thương bằng nước lạnh.',
        'Không nên ăn hay  uống nước ngay sau khi bị chó cắn.',
        'Thông báo ngay cho người lớn để được hỗ trợ.',
        'Nếu thấy chảy máu quá nhiều, mà bạn đang ở một mình, hãy dùng khăn hoặc băng gạc sạch buộc chặt vết thương, sau đó gọi 115 để nhận được sự giúp đỡ của các nhân viên y tế nhé!',
      ],
    },
  ],
  5: [
    {
      id: 1,
      title: 'Kĩ năng số 1: Xử lí các chấn thương bầm tím',
      content: [
        'Bước 1: Rửa sạch vùng da bị bầm tím',
        'Bước 2: Lấy đá lạnh chườm vào vết bầm, lưu ý nên bọc đá bằng khăn hoặc 1 lớp vải để tránh bị bỏng lạnh',
        'Bước 3: Bạn nên thông báo lại cho bố mẹ để được giúp đỡ xử lí vết thương.',
      ],
    },
    {
      id: 2,
      title: 'Kĩ năng số 2: Kiểm soát chảy máu',
      content: [
        'Bước 1: Rửa vết thương dưới vòi nước sạch để làm sạch vết thương, tránh bị nhiễm trùng.',
        'Bước 2: Đánh giá tình trạng vết thương, nếu vết thương quá lớn, lượng máu chảy nhiều, bạn nên dùng khăn vải hoặc bông gạc sạch để cầm máu tạm thời, sau đó ngay lập tức tìm thầy cô, bố mẹ để được hỗ trợ xử lí, nếu bạn đang ở một mình hoặc không có người lớn quanh đó, bạn nên liên lạc với 115 để được các nhân viên y tế hỗ trợ.',
        'Bước 3: Với các vết trầy xước nhỏ, không chảy máu hoặc chảy máu ít, bạn nên băng vết thương bằng bông và gạc sạch, hoặc băng keo cá nhân để cầm máu và tránh bụi bẩn.',
      ],
    },
    {
      id: 3,
      title: 'Kĩ năng số 3: Xử lí các chấn thương gãy xương',
      content: [
        'Bước 1: Kiểm tra tình trạng chấn thương: Nếu bạn hoặc bạn của bạn trong lúc vui đùa không may té ngã, và sau khi ngã, cảm thấy đau nhói, khó cử động hoặc không cử động được vị trí bị va đập (thường là ở tay hoặc chân) thì có thể xương ở vùng đó đã bị chấn thương. Đây thường là những vết thương không chảy máu nhưng vô cùng đau nhức.',
        'Bước 2: Cố định vùng xương bị thương tổn: Sử dụng nẹp hoặc bất kì thứ gì có hình dạng thẳng, dài vừa phải so với vùng chấn thương, có hình dáng tương tự như nẹp mà bạn có thể tìm được xung quanh, ép sát vùng bị chấn thương và cố định chắc chắn lại bằng dây hoặc băng gạc.',
        'Bước 3: Tìm cách thông báo cho thầy cô, ba mẹ để nhận sự giúp đỡ. Nếu bạn ở một mình, hãy nhanh chóng gọi 115 để được hỗ trợ.',
      ],
    },
    {
      id: 4,
      title: 'Kĩ năng số 4: Xử lí vết bỏng',
      content: [
        'Bước 1: Làm mát vết bỏng, tránh cho da khỏi bị rộp bằng cách mở vòi nước cho chảy chầm chậm lên vết bỏng khoảng 15 - 20 phút. Nước sạch vừa có tác dụng giảm nhiệt, giảm đau, giảm phù nề, viêm nhiễm, giảm độ sâu của vết thương. Không dùng nước lạnh, nước đá (trong tủ lạnh) để làm mát da.',
        'Bước 2: Nhẹ nhàng tháo bỏ những vật cứng trên vùng bỏng như giầy, dép, vòng tại nơi bị bỏng.',
        'Bước 3: Che phủ vùng bỏng bằng gạc vô khuẩn. Nếu không có gạc có thể dùng vải sạch',
        'Bước 4: Tìm cách thông báo cho thầy cô, ba mẹ để nhận sự giúp đỡ. Nếu bạn ở một mình, hãy nhanh chóng gọi 115 để được hỗ trợ.',
      ],
    },
    {
      id: 5,
      title: 'Kĩ năng số 5: CPR (Phương pháp hồi sức tim phổi)',
      content: [
        'Bước 1: Kiểm tra tình trạng bệnh nhân: Lay nhẹ người, gọi lớn xem bệnh nhân còn tỉnh táo không, kiểm tra mũi xem nạn nhân có còn thở hay đã ngừng thở, ép bàn tay vào phía bên dưới cổ (phải hoặc trái đều được) xem mạch có còn đập không, cuối cùng là áp tai vào ngực để kiểm tra xem tim nạn nhân còn đập không.',
        'Bước 2: Nếu nạn nhân bất tỉnh và tim ngừng đập, gọi ngày cho 115 để yêu cầu giúp đỡ',
        'Bước 3: Trong lúc chờ cấp cứu bạn nên tiến hành hồi sức tim phổi cho nạn nhân bằng cách:Đặt người đó nằm ngửa trên bề mặt chắc chắn; Quỳ xuống cạnh cổ và vai; Đặt gót bàn tay lên chính giữa ngực, tay còn lại đè lên bàn tay thứ nhất. Giữ khuỷu tay thẳng, vai thẳng góc với tay; Sử dụng trọng lượng phần trên của cơ thể (không chỉ là cánh tay) và ấn thẳng xuống (nén) ngực tối thiểu 5cm nhưng không lớn hơn 6cm. Ấn mạnh ở mức 100 đến 120 lần một phút, và cứ tiếp tục ấn ngực cho đến khi có dấu hiệu cử động hoặc đến khi nhân viên y tế đến.',
      ],
    },
  ],
  6: [
    {
      id: 1,
      title: 'Thế nào là xâm hại tình dục trẻ em?',
      content: [
        'Xâm hại tình dục trẻ em là sử dụng trẻ em để thỏa mãn nhu cầu tình dục của người lớn hơn. Xâm hại tình dục trẻ em bao gồm lạm dụng tình dục trẻ em và bóc lột tình dục trẻ em',
      ],
    },
    {
      id: 2,
      title: 'Đối tượng xâm hại',
      content: [
        'Đối tượng có thể có các hành vi xâm hại tình dục đối với các bạn có thể là bất kỳ ai, không phân biệt tuổi tác hay giới tính, có thể là người không quen biết, thậm chí kể cả là những người quen thân như chú, bác, anh em, hàng xóm',
      ],
    },
    {
      id: 3,
      title: 'Các mức độ xâm hại tình dục',
      content: [
        'Đó có thể là các hành vi đụng chạm vào các bộ phận nhạy cảm trên cơ thể của bạn, bao gồm miệng, ngực, vùng giữa hai chân và mông.',
        'Ngoài ra đó còn có thể là những hành động như bắt bạn chạm vào những vùng nhạy cảm trên cơ thể của họ.',
        'Những hành động như kể cho bạn nghe về tình dục, cho bạn xem các tranh ảnh, phim liên quan đến các bộ phận nhạy cảm cũng được coi là các hành vi xâm hại tình dục.',
      ],
    },
    {
      id: 4,
      title: 'Tác hại của việc xâm hại tình dục',
      content: [
        'Làm tổn hại nghiêm trọng đến tinh thần, tâm lý, sức khỏe của bạn.',
        'Gây hoang mang, lo lắng cho gia đình và xã hội.',
        'Làm gia tăng tệ nạn mại dâm, tệ nạn buôn bán phụ nữ, tăng sự lây nhiễm HIV/AIDS và các bệnh lây qua đường tình dục.',
        'Gây ảnh hưởng xấu đến thuần phong mỹ tục và truyền thống đạo đức tốt đẹp của nhân dân ta.',
      ],
    },
    {
      id: 5,
      title:
        'Cách phân biệt các hành động yêu thương và các hành động xâm hại tình dục',
      content: [
        'Những hành động như mẹ ôm bạn khi đi ngủ, tắm giúp bạn, ôm hôn ông bà, hoặc bác sĩ dụng vào bộ phận nhạy cảm trên cơ thể bạn để khám bệnh khi có sự có mặt của bố mẹ, đây được coi là các hành động mang tính yêu thương, giúp đỡ bạn.',
        'Ngoài ra bất kỳ hành động nào đụng chạm vào các bộ phận nhạy cảm trên cơ thể của bạn khi không có mặt bố mẹ, không được sự đồng ý của bạn, làm bạn khó chịu, sợ hãi, xấu hổ đều có thể là những hành động xâm hại tình dục.',
      ],
    },
    {
      id: 6,
      title: 'Các quy tắc phòng chống nguy cơ bị xâm hại:',
      content: [
        'Không đi một mình ở nơi tối tăm, vắng vẻ.',
        'Không ở trong phòng kín một mình với người lạ. Nếu đó là người quen của gia đình thì cửa phòng phải luôn được mở.',
        'Không nhận tiền, quà hoặc nhận sự giúp đỡ đặc biệt của người khác mà không rõ lý do.',
        'Không đi nhờ xe người lạ, hoặc sử dụng ăn uống của người lạ đưa. ',
        'Không để cho người lạ đến gần đến mức họ có thể chạm tay vào người mình.',
        'Không để người lạ vào nhà, nhất là khi trong nhà chỉ có một mình.',
        'Không nói chuyện điện thoại với người lạ khi đang ở nhà một mình.',
        'Không cho ai có quyền tùy tiện động chạm, sờ mó vào chỗ kín của cơ thể hoặc bất kỳ hành động thô lỗ nào với các em.',
      ],
    },
    {
      id: 7,
      title:
        'Bạn cần làm gì nếu gặp đối tượng có các hành động xâm hại tình dục đối với bạn',
      content: [
        'Nếu bất kỳ ai, trừ bố mẹ, ông bà, có các hành động đụng chạm quá mức đối với bạn, bạn cần thể hiện thái độ không đồng ý bằng cách nói "không".',
        'Hét thật to kêu cứu và chạy thật nhanh khỏi đó để tìm kiếm sự giúp đỡ.',
        'Trong trường hợp có kẻ xấu đe dọa trẻ phải giữ bí mật thì bạn nên thông báo cho cha mẹ và người thân biết để được giúp đỡ.',
      ],
    },
  ],
  7: [
    {
      id: 1,
      title: 'Không bắt chuyện với người lạ',
      content: [
        'Khi có một ai đó lạ mặt tiếp cận bạn, thì phải chạy trốn ngay lập tức và nói với bố mẹ hoặc những người khác như: cảnh sát, nhân viên cửa hàng, người đi đường,… để nhờ sự giúp đỡ.',
      ],
    },
    {
      id: 2,
      title: 'Không nhận quà của người lạ',
      content: [
        'Không được nhận quà bánh, truyện tranh, tiền bạc, lời rủ đi công viên, trung tâm vui chơi,… của người lạ. Để đề phòng những món quà, bánh kẹo đó có tẩm thuốc mê, trẻ ngửi hoặc ăn vào sẽ bị kẻ xấu bắt đi, nên từ chối khéo rằng “Ba mẹ cháu không cho phép nhận”. sau đó trẻ hãy tìm đến chỗ có người lớn hoặc bảo vệ đứng để tránh bị người lạ tiếp tục dụ dỗ.',
      ],
    },
    {
      id: 3,
      title: 'Kêu to khi có người lạ kéo hoặc bắt đi',
      content: [
        'Trong trường hợp bạn bị lôi đi, cần kêu khóc thật to để mọi người biết và giúp đỡ. Nên nhớ số điện thoại của bố mẹ, hoặc người thân để dùng trong trường hợp khẩn cấp. Nếu không liên lạc được với bố mẹ, nên gọi cho công an qua số điện thoại 113, hoặc tổng đại quốc gia bảo vệ trẻ em qua số điện thoại 111.',
      ],
    },
    {
      id: 4,
      title: 'Đề phòng thất lạc chỗ đông người',
      content: [
        'Trong một khu phố hay một siêu thị đông đúc, bạn phải luôn luôn đi gần, nắm tay bố mẹ và khi bố mẹ khuất khỏi tầm nhìn của bạn thì hãy gọi to lên.',
      ],
    },
    {
      id: 5,
      title: 'Khi ở nhà một mình không được cho người lạ vào nhà',
      content: [
        'Khi bố mẹ phải đi làm mà một mình bạn ở nhà, cần khóa kỹ cửa, cổng, không được tiếp chuyện hay mở cửa cho người lạ vào nhà, dù bất cứ lý do gì, không được bỏ nhà đi chơi. Nếu có người lạ tìm đến nhà, lấy lý do công việc hoặc là bạn của bố mẹ để xin vào nhà, cần gọi điện ngay cho bố mẹ thông báo và bảo họ lúc khác quay lại. Tuyệt đối không đứng gần cửa ra vào để nói chuyện với khách, đề phòng bị thôi miên, đầu độc, dụ dỗ mở cửa. Tình huống khẩn cấp có thể gọi điện 113 báo công an.',
      ],
    },
    {
      id: 6,
      title: 'Luôn luôn nhớ số điện thoại của bố mẹ',
      content: [
        'Để đề phòng trường hợp bị lạc khỏi bố mẹ, hoặc gặp chuyện ngoài ý muốn khi không có bố mẹ ở cạnh, bạn nên nhớ thật chính xác số điện thoại của bố mẹ để đề phòng trường hợp xấu nhất có thể xảy ra thì trẻ có thể nhờ bảo vệ, công an, … gọi điện về cho bố mẹ.',
      ],
    },
    {
      id: 7,
      title: 'Tránh bị lừa qua mạng Internet',
      content: [
        'Bạn không được công khai những thông tin cá nhân lên trên mạng, bao gồm: họ tên đầy đủ, tên của những thành viên trong gia đình, số điện thoại, địa chỉ hoặc trường học. Chỉ cần với những thông tin này, một kẻ lạ mặt có thể đóng vai một người bạn đáng tin tưởng và dễ dàng tiếp cận bạn với những mục đích xấu.',
      ],
    },
    {
      id: 8,
      title: 'Chỉ đi cùng với người thân quen như bố mẹ, ông bà',
      content: [
        'Nếu bạn đang chờ bố mẹ đến đón tan học, mà có một người lạ mặt tự nhận là người quen của bố mẹ và được bố mẹ nhờ để đưa bạn về, bạn không nên tin tưởng đi theo họ ngay mà nên tìm cách liên lạc với bố mẹ để xác nhận, trong trường hợp bạn không liên lạc được với bố mẹ, tuyệt đối không được đi theo người lạ mặt đó. Nếu họ vẫn đeo bám và muốn bạn đi theo họ, hãy tìm cách tránh xa người lạ mặt đó bằng cách đến chỗ bác bảo vệ của trường hoặc thầy cô trong trường để nhờ sự giúp đỡ.',
      ],
    },
  ],
  8: [
    {
      id: 1,
      title: 'Những biểu hiện của cơ thể khi bị ốm',
      content: [
        'Khi bị ốm, cơ thể thường có những biểu hiện dễ nhận thấy như: hắt hơi, chảy nước mũi, đau đầu, đau bụng, đau họng, ho, sốt, người có nhiều nổi mẩn…việc nhận ra những biểu hiện của cơ thể khi bị ốm rất cần thiết, giúp chúng ta có thể chữa trị kịp thời, bệnh sẽ mau khỏi hơn.',
      ],
    },
    {
      id: 2,
      title: 'Những nguyên nhân khiến bạn bị ốm',
      content: [
        'Lo lắng quá nhiều chuyện cũng là một trong những nguyên nhân khiến bạn bị bệnh.',
        'Ngủ đúng giờ giấc mỗi ngày rất quan trọng đối với sức khỏe và thể chất. Ngủ không đủ giấc, không đúng giờ giấc có thể tàn phá cơ thể bạn, dẫn đến bạn bị bệnh thường xuyên hơn và kéo dài lâu hơn.',
        'Nếu không xây dựng chế độ dinh dưỡng lành mạnh, bạn sẽ có nguy cơ ăn uống thiếu chất dẫn đến tình trạng mệt mỏi, táo bón,... Tình trạng ăn uống thiếu chất một cách thường xuyên có thể dẫn đến một số vấn đề sức khỏe tinh thần, thể chất và cảm xúc',
      ],
    },
    {
      id: 3,
      title: 'Những việc cần làm khi bị ốm',
      content: [
        'Trong trường hợp bạn bị ốm khi ở nhà một mình hãy gọi cho bố mẹ và kể cho bố mẹ nghe những triệu chứng của bạn để bố mẹ có thể giúp đỡ và hướng dẫn bạn thông qua điện thoại.',
        'Nếu có người lớn nào gần đó bạn có thể nói với họ để họ có thể giúp bạn.Trong trường hợp bạn đang đi học ở trường thì hãy nói ngay với thầy cô giáo nhé.',
        'Khi bị ốm, cơ thể của bạn sẽ xuất hiện dấu hiệu mệt mỏi kèm theo nhiều triệu chứng bất thường khác. Điều đầu tiên bạn nên làm là tự kiểm tra cơ thể tùy theo tình trạng sức khỏe mà bạn dự đoán: nhiệt độ, huyết áp, đường huyết,...',
        'Chườm khăn ấm vào trán, nách, bẹn, nếu sốt cao. Nếu trong trường hợp sốt quá cao hãy lập tức đến ngay bệnh viện.',
        'Ăn những món ăn dinh dưỡng phù hợp với người đang bị ốm',
        'Hãy uống nước ngay cả khi bạn không khát. Trường hợp bị tiêu chảy, bạn lại càng nên bổ sung nước. Bạn có thể uống nước bù điện giải Oresol để trị chứng mất nước do tiêu chảy. Nếu không bị sốt, bạn cũng có thể nhâm nhi tách trà ấm để thư giãn. Đây cũng là một bí quyết đơn giản giúp làm loãng các chất nhầy trong mũi khi bạn bị cảm.',
        'Áp lực công việc là một trong những nguyên nhân có thể khiến bạn có nguy cơ bị ốm. Vì vậy nếu còn việc học hay bài tập đang còn dang dở hãy dừng lại nhé, để cho bản thân được nghỉ ngơi, thư giãn.',
        'Hãy lập tức đi ngủ ngay khi bạn cảm thấy quá mệt nhé.',
        'Nghỉ ngơi, uống thuốc và làm theo những chỉ dẫn của bác sĩ để nhanh chóng khỏi bệnh nhé.',
      ],
    },
    {
      id: 4,
      title: 'Những việc cần làm để tránh bị ốm',
      content: [
        'Do virut truyền nhiễm từ niêm mạc nên bạn cố gắng hết mức không chạm vào mũi, miệng, hay mắt,...',
        'Chăm sóc sức khỏe thường xuyên bằng cách hàng ngày ăn những đồ có dinh dưỡng, ngủ đầy đủ.',
        'Uống một cốc nước cam mỗi ngày là cách bổ sung vitamin C hiệu quả giúp phòng và chữa cảm lạnh.',
        'Hãy uống đủ 2 lít nước mỗi ngày để giúp cơ thể thải được độc tố.',
        'Lười vận động là tình trạng hầu như rất nhiều người mắc phải vào mùa đông. Tuy nhiên, để ngăn ngừa cảm lạnh, hãy ra ngoài vào ban ngày càng nhiều càng tốt và giữ thói quen vận động thường xuyên. Những hoạt động thể chất đều đặn có thể sẽ làm gia tăng lượng tế bào của hệ miễn dịch, giúp chống lại nhiều loại vi khuẩn và virut có hại cho sức khỏe đấy nhé. Tuy nhiên, việc vận động quá mức và lặp đi lặp lại có thể làm giảm phản ứng miễn dịch của cơ thể, vì vậy giữ thói quen vận động vừa phải và phù hợp với cơ thể của mình là điều vô cùng quan trọng đấy.',
        'Khi ở ngoài đường về nhà, bạn phải rửa tay và súc miệng. Khi rửa tay bạn phải xoa xà phòng tạo bọt, rửa thật kỹ giữa các ngón tay, đầu ngón tay, móng tay, mu bàn tay, cho đến cổ tay. Ngoài ra trước khi nấu nướng hay trước khi ăn, bạn đừng quên phải rửa tay.',
        'Nên súc miệng bằng nước muối vào buổi sáng và buổi tối, để phòng tránh bệnh cảm lạnh.',
      ],
    },
  ],
  9: [
    {
      id: 1,
      title: 'Việc đi lạc ở trẻ nhỏ là gì?',
      content: [
        'Một số trẻ em bị lạc khi cha mẹ cho đi chơi ở công viên, siêu thị, lễ hội, đi du lịch… là những nơi rộng rãi, có khi là lạ lẫm với trẻ và rất đông người. Trẻ bị lạc do mải nhìn thứ thích, có khi trẻ dừng  lại lâu ở chỗ có đồ chơi, trò chơi hấp dẫn, hoặc do cha mẹ không nắm tay trẻ đi cùng.',
      ],
    },
    {
      id: 2,
      title: 'Nguyên nhân dẫn đến đi lại ở các bạn nhỏ',
      content: [
        'Do sự lơ là mất cảnh giác của bố mẹ.',
        'Do bé bị cám dỗ nơi chốn đông người và lạc lúc nào không hay.',
        'Do bản tính hiếu động, tò mò, nên trẻ rất dễ bị lạc khi đi cùng cha mẹ hoặc người thân đến những nơi đông người như chợ, siêu thị, công viên, trung tâm giải trí…',
      ],
    },
    {
      id: 3,
      title: 'Cách ứng xử khi bị đi lạc',
      content: [
        'Vì bố mẹ khi không thấy bạn sẽ lập tức quay lại chỗ cũ để tìm bạn nên khi bạn bị lạc, bạn không cần chạy đi khắp nơi tìm bố mẹ.Bạn chỉ cần đứng yên một chỗ, nhờ người lớn gọi điện thoại hoặc nhờ người lớn tìm sự giúp đỡ',
        'Bình tĩnh, không được khóc vì khóc sẽ gây chú ý với những kẻ xấu, nên đứng yên một chỗ để quan sát và tìm kiếm sự giúp đỡ, nhưng tuyệt đối không đi theo người lạ.',
        'Nói KHÔNG với người lạ. Đặc biệt cẩn trọng với những người lạ cứ dụ cho bé ăn quà, cho quà, dụ bé đi theo hay nhờ bé giúp làm một việc gì đó.',
        'La hét hoặc thét lên nếu bị người lạ lôi kéo, dắt đi. Hét lên “Cứu với”, “Cháu không biết cô/ chú” để thu hút sự chú ý của người xung quanh nếu thấy gần đó có người, những người xung quanh sẽ nhận thấy sự khác thường và can thiệp.',
        'Chạy thật nhanh đến chỗ có nhiều người lớn gần đó. Tìm đến những người có mặc đồng phục, đeo bảng tên, đó là những người làm việc tại công viên hay cửa hàng… Tìm các chú công an, bảo vệ của trung tâm hay các bố mẹ đi cùng con nhỏ để nhờ giúp, họ có thể gọi loa để giúp các bạn tìm bố mẹ.',
      ],
    },
    {
      id: 4,
      title: 'Các biện pháp phòng ngừa khi đi lạc',
      content: [
        'Khi các bạn cùng bố mẹ đi vào những nơi đông người như ( công viên, siêu thị hay trung tâm thương mại,…), các bạn phải nhớ luôn nắm chặt tay bố mẹ vì ở những nơi đông người như vậy rất dễ bị lạc bố mẹ nhé.',
        'Các bạn hãy  ghi nhớ số điện thoại của bố mẹ, nhớ địa chỉ nhà và thường xuyên nhắc lại hàng ngày để kiểm tra để phòng khi bạn bị lạc nhé!',
        'Nếu các bạn dưới 6 tuổi cách tốt nhất là hãy luôn đem theo bên mình một mảnh giấy ghi tên và số điện thoại của bố mẹ và của một người thân khác có thể liên lạc trong trường hợp khẩn cấp. Tờ giấy này bạn phải cất kỹ và chỉ đưa cho người có trách nhiệm, có thể giúp bạn.',
        'Nếu bạn đã lớn hơn một chút, hãy định ra một nơi dễ nhận biết để tập trung lại trong trường hợp bị lạc nhau.',
        'Nếu trong trường hợp bạn còn quá nhỏ hoặc không thể nhớ nổi số điện thoại của bố mẹ, địa chỉ nhà hãy viết một mẩu giấy nhỏ có ghi tên số điện thoại của bố mẹ và địa chỉ nhà mình và luôn mang bên mình để phòng trường hợp đi lạc sẽ sử dụng đến.',
      ],
    },
  ],
  10: [
    {
      id: 1,
      title: 'Tai nạn giao thông là gì',
      content: [
        'Tai nạn giao thông là sự việc rủi ro, bất ngờ xảy ra khi phương tiện giao thông đang di chuyển trên các tuyến đường bộ, đường sắt, đường thuỷ, đường hàng không, gây thiệt hại đến tính mạng, sức khoẻ con người, đến tài sản và phương tiện.',
      ],
    },
    {
      id: 2,
      title: 'Nguyên nhân dẫn đến tai nạn khi tham gia giao thông',
      content: [
        'Tai nạn giao thông có thể xảy ra bất ngờ. Tuy nhiên nó cũng có thể xảy ra, nếu bạn không tuân thủ các quy định cụ thể khi tham gia giao thông. Nhất là ý thức khi tham gia giao thông là một trong những nguyên nhân chính gây ra tai nạn giao thông.',
        'Sự phân bố không hợp lý của hệ thống biển báo giao thông. Cũng như sự xuống cấp trầm trọng của các tuyến đường nói riêng và hệ thống cơ sở hạ tầng nói chung.',
        'Sử dụng phương tiện không đảm bảo an toàn, không đúng quy định khi tham gia giao thông.',
        'Thiếu kiến thức cũng như kỹ năng khi tham gia giao thông, xử lý tình huống bất ngờ.',
        'Thiên tai lũ lụt cũng là một trong những nguyên nhân gây tai nạn giao thông.',
        'Ý thức chấp hành luật giao thông của người dân còn thấp, phải kể đến cả văn hóa giao thông.Người đi bộ chạy qua đường bất ngờ, không quan sát, đùa nghịch đu bám tàu xe, đá bóng dưới lòng đường, phơi rơm rạ trên đường giao thông.',
        'Người đi xe đạp dàn hàng 3, lạng lách, vượt ẩu trước mũi xe máy, ô tô…',
        'Người đi xe máy phóng nhanh, lạng lách.',
      ],
    },
    {
      id: 3,
      title: 'Cách xử lý khi gặp tai nạn trong lúc tham gia giao thông',
      content: [
        'Khi người gặp tai nạn giao thông là chính bạn thì hãy thật bĩnh tình và tìm sự giúp đỡ của những người xung quanh để họ có thể giúp mình nhé.',
        'Khi người gặp tai nạn giao thông là người khác đang đi đường bạn có thể giúp họ bằng cách: Giúp họ dựng xe lên và đỡ họ dậy, rồi hỏi họ có cần mình giúp gì không để có thể giúp đỡ họ nếu họ cần đến sự giúp đỡ của bạn nhé, nếu họ bị thương nặng và tai nạn khá nguy hiểm bạn không thể xử lý được thì hãy gọi điện ngay cho cấp cứu và công an nhé. Hoặc bạn có thể tìm sự giúp đỡ của những người lớn hơn tham gia giao thông ở đó',
        'Đôi khi hệ quả của các vụ tai nạn có thể tiềm ẩn nhiều nguy cơ,việc quan sát hiện trường sẽ giúp bạn phát hiện và chặn đứng các mối đe dọa khác.Chẳng hạn như tình trạng rò rỉ xăng xe, động cơ vẫn đang hoạt động hoặc thậm chí là phương tiện đang bốc cháy. Nếu phát hiện phương tiện còn đang nổ máy thì bạn hãy tìm cách tắt máy cho phương tiện, nếu xuất hiện đám cháy thì hãy cố gắng tìm cách dập lửa.',
      ],
    },
    {
      id: 4,
      title: 'Phương pháp giúp bạn tránh khỏi tai nạn khi tham gia giao thông',
      content: [
        'Đảm bảo an toàn khi đi bộ trên đường',
        'Đảm bảo an toàn khi đi bộ qua đường',
        'Đảm bảo an toàn khi đi bộ từ ngõ ra đường chính',
        'Đảm bảo an toàn khi đi xe đạp trên đường',
        'Đảm bảo an toàn khi ngồi trong xe ô tô',
      ],
    },
  ],
  11: [
    {
      id: 1,
      title: 'Nguyên nhân dẫn đến việc trẻ nhỏ phải đối mặt với những người lạ',
      content: [
        'Khi bạn bị lạc bố mẹ ở trung tâm thương mại, siêu thị, công viên,... trong những trường hợp này bạn rất dễ tạo cơ hội cho những người lạ lợi dụng làm việc xấu.',
        'Khi bố mẹ vắng nhà chỉ có bạn ở nhà một mình, người lạ đến nhà và giả danh là một người quen nào đó của bố mẹ bạn.',
        'Khi bạn không đi cùng bố mẹ người lạ cho bạn những món quà, bánh, kẹo có tẩm thuốc mê mà bạn không hề hay biết để có thể dễ dàng tiếp cận với bạn.',
        'Khi bạn ở nhà một mình và nhận được cuộc gọi của người lạ, bạn còn có quá nhỏ có thể không biết gì và chẳng may cung cấp cho người xấu thông tin của gia đình, số điện thoại của bố mẹ hay chính địa chỉ nhà của bạn.',
      ],
    },
    {
      id: 2,
      title: 'Các cách xử lý khi phải đối mặt với những người lạ',
      content: [
        'Khi bạn đi lạc bố mẹ ở trung tâm thương mại, siêu thị, công viên,... nhất là những chỗ đông người bạn nên tuyệt đối giữ bình tĩnh vì nếu như bạn la hét, khóc hay mất bình tĩnh rất dễ gây chú ý cho những người xấu lạ mặt. Nếu như trong trường hợp chẳng may bạn bị người lạ chú ý đến và phải đối mặt với họ thì hãy hét thật to lên: “Đây không phải là bố mẹ cháu”',
        'Khi ở nhà một mình mà có người lạ, kể cả người quen của bố mẹ, hàng xóm, thợ sửa ống nước, đồ điện hoặc là nhân viên thu tiền điện thoại,... tìm đến tuyệt đối không mở cửa cho họ mà hãy hỏi họ có chuyện gì nhắn lại hoặc hẹn chiều tối đến gặp bố mẹ.',
        'Khi có người lạ mời hay là cho bạn những món quà, bánh, kẹo tuyệt đối không được nhận mà từ chối một cách khéo léo rằng “ bố mẹ cháu không cho phép nhận”.Sau đó bé hãy tìm đến chỗ có người lớn hoặc chú bảo vệ đứng để tránh bị người lạ kia tiếp tục dụ dỗ.Trong trường hợp người đó cứ bám theo ép bé ăn hay bắt lên xe thì phải quẫy đạp và hét thật to để mọi người đến cứu.',
        'Khi có người lạ gọi điện đến nhà các bạn tuyệt đối không được cung cấp thông tin của bố mẹ mình, hay địa chỉ nhà mình cho họ mà bạn hãy nói thẳng: “Bố mẹ cháu không cho phép nói chuyện với người lạ lâu xin bác thông cảm” rồi cúp máy. Nếu trường hợp bị người lạ gọi đến nhiều lần đe dọa, trêu chọc thì bạn có thể gọi số 113 để tố cáo với cảnh sát.',
      ],
    },
    {
      id: 3,
      title:
        'Các phương pháp giúp bạn tránh gặp nguy hiểm khi đối mặt với người lạ',
      content: [
        'Đối với những người lạ, chưa từng gặp mặt, không quen biết thì phải giữ khoảng cách, không nói chuyện, nhất là ở nơi vắng vẻ. Trường hợp người lạ cố đến gần để tiếp cận thì trẻ nên lùi lại, đi về hướng có nhiều người hơn và nhờ sự giúp đỡ nếu cần.',
        'Người lạ có rất nhiều lý do để dẫn dụ bạn lên xe như: dẫn đi chơi ở 1 nơi khác rất vui, dẫn đi tìm bố mẹ, hoặc nói dối là bố mẹ nhờ đón…. Vì vậy, bạn hãy thật cảnh giác với tất cả những lời mời này. Tốt nhất, không phải người quen biết, gần gũi thì không lên xe nhé.',
        'Nếu bước vào thang máy mà chỉ có 2 người, bạn đừng đi chung với người lạ nhé. Hãy chỉ đi thang máy khi có đông người hoặc đi cùng bố mẹ. ',
        'Giữ khoảng cách từ 2-3m và không cho người lạ chạm vào người, vì bất cứ lý do gì. Nếu người đó cố tiếp cận thì hãy la lớn lên để những người xung quanh biết và giúp đỡ.',
        'Nếu bạn ở nhà 1 mình mà có người lạ đến (nhân viên giao hàng, nhân viên sửa chữa….), không được tiết lộ là bố mẹ đang đi vắng. Nếu họ cố tình muốn vào nhà thì cần báo ngay cho bố mẹ, người thân hoặc hàng xóm xung quanh biết. ',
        'Người lạ có thể cho kẹo, bánh, bóng bay, hoặc những đồ vật bắt mắt khiến bạn rất thích thú nhưng hãy nhớ nhé đừng nhận bất cứ thứ gì từ người lạ, đặc biệt là khi không có bố mẹ ở cùng nhé.',
      ],
    },
  ],
  12: [
    {
      id: 1,
      title: 'Hỏa hoạn là gì',
      content: [
        'Hỏa hoạn là hiểm họa do lửa gây ra. Hỏa hoạn là thuật ngữ để chỉ một đám cháy lớn thiêu đốt phá hủy tài sản (cháy nhà và công trình xây dựng), đe dọa đến sức khỏe và cuộc sống của con người, sự sống động vật và thiêu đốt thảm thực vật (cháy rừng). Một trận hỏa hoạn có thể do tự nhiên gây ra bởi thiên tai (như núi lửa phun, sét đánh gây cháy rừng; động đất gây chập điện, nổ khí ga), hay do con người vô tình hay cố ý tạo ra (đốt cháy).',
      ],
    },
    {
      id: 2,
      title: 'Các nguyên nhân dẫn đến hỏa hoạn',
      content: [
        'Các sự cố điện như tự ý câu, móc thêm các thiết bị tiêu thụ điện ngoài thiết kế ban đầu, đấu nối dây dẫn điện tùy tiện, không đảm bảo yêu cầu về kỹ thuật điện, đường dây dẫn điện không được kiểm tra, thay thế kịp thời nên bị lão hóa,… dẫn đến tình trạng mất an toàn trong việc sử dụng điện, cụ thể như hiện tượng quá tải, chập mạch,… Ngoài ra, còn một hiện tượng nguy hiểm đáng lưu tâm nữa là tâm lý chủ quan trong việc sử dụng điện an toàn như: không ngắt điện tủ lạnh, quạt máy, máy tính,… khi ra khỏi nhà.',
        'Lạm dụng việc thắp nhang thờ cúng, đốt vàng mã với tâm lý muốn báo hiếu, tạ ơn cho người đã khuất. Việc thắp hương thờ cúng tràn lan cũng là nguyên nhân tiềm ẩn của cháy, nổ tại các hộ gia đình.',
        'Hiện nay đa số các hộ gia đình đều dùng gas để đun nấu. Tuy vậy, việc sử dụng gas không an toàn sẽ dễ gây ra cháy nổ gây thiệt hại cho người và của. Một số nguyên nhân có thể dẫn đến cháy, nổ khi sử dụng gas như: không khóa van bình chứa khí gas khi không đun nấu, tắt bếp gas chưa đúng quy trình, sử dụng các chai chứa gas và các phụ kiện không đảm bảo chất lượng,…',
        'Chưa trang bị phương tiện chữa cháy tại chỗ hoặc có trang bị nhưng không biết sử dụng hay sử dụng không thành thạo. Vì vậy, khi xảy ra sự cố cháy, nổ không có phương tiện chữa cháy hoặc lúng túng không biết cách xử lý ngay từ ban đầu. Từ đó, đám cháy có điều kiện phát triển mạnh trong thời gian dài gây ra cháy lan, cháy lớn. Ngoài ra, còn một số người cố tình mang các chất nguy hiểm cháy, nổ vào nhà để bảo quản, sử dụng vì một số mục đích cá nhân nào đó.',
        'Sự tò mò của trẻ em cũng là một trong những nguyên nhân dẫn đến hỏa hoạn. Việc trẻ nhỏ chơi với nến, diêm chính là nguyên nhân dẫn đến nhiều vụ hỏa hoạn.',
        'Chưa sử dụng nến đúng cách, có trường hợp quên thổi tắt nến khi không sử dụng nữa hay khi ra khỏi  nhà.',
      ],
    },
    {
      id: 3,
      title: 'Phương pháp ứng xử khi gặp hỏa hoạn',
      content: [
        'Bình tĩnh để xử lý khi gặp hỏa hoạn',
        'Khi phát hiện, ngửi thấy mùi lửa, khói bốc lên thì hãy gọi ngay cho lực lượng chức năng để giúp đỡ với số điện thoại 114. Nếu như bị kẹt trong đám cháy, các em phải thật bình tĩnh và làm theo hướng dẫn của người lớn.',
        'Các bạn hãy nắm rõ các lối thoát hiểm trong nhà mình như: cửa trước, cửa sau, lối thông sang nhà bên cạnh. Hoặc nếu nhà cao tầng thì các bạn nhớ thoát hiểm bằng cầu thang bộ nhé.Tuyệt đối đừng đi bằng cầu thang máy',
        'Khi gặp đám cháy các hãy nhớ quan sát vị trí các biển báo thoát hiểm dạ quang, biển báo PCCC dạ quang để thoát ra ngoài nhanh nhất. Trong một số trường hợp,  bạn cần phải kêu lên thật lớn để mọi người có thể biết để nhanh chóng đến trợ giúp bạn nhé.',
        'Các trường hợp tử vong chủ yếu là do hít phải khí độc nên nếu trong trường hợp bạn là người trong đám cháy đó thì nhất định hãy dùng khăn ướt để bịt mũi và cúi sát người xuống sàn nhà khi thoát nạn. Khi di chuyển, bạn cần lấy khăn ướt, bịt vào mũi để tránh khí độc nhiễm vào có thể gây ngạt thở. Bạn phải cúi thấp người xuống càng tốt vì càng sát đất thì khói và khí độc càng ít hơn.',
      ],
    },
    {
      id: 4,
      title: 'Biện pháp phòng ngừa xảy ra hỏa hoạn',
      content: [
        'Hãy kiểm tra các thiết bị sưởi ấm hàng năm bởi những kỹ thuật viên có trình độ. Và hãy đặt máy sưởi cách xa mọi thứ có thể cháy bao gồm rèm cửa, đồ đạc ít nhất một mét và đặc biệt không sử dụng máy sưởi để làm khô giày hoặc quần áo.',
        'Nếu nhà bạn có sử dụng nến thì hãy để chúng trong giá đỡ để chắc chắn trên một bề mặt phẳng.Và đặc biệt hãy để chúng tránh xa những vật liệu dễ cháy nổ,tầm tay của trẻ nhỏ hoặc vật nuôi. Nếu không còn sử dụng hoặc bạn đi ra khỏi nhà thì hãy thổi tắt chúng.',
        'Hãy tránh xa những vật dụng dễ gây cháy nổ và học thêm về tầm quan trọng của an toàn cháy nổ giúp giảm nguy cơ cháy nổ. Trong trường hợp cháy xảy ra, việc nhà bạn sử dụng cửa chống cháy sẽ giữ được an toàn cho bạn cũng như ngăn chặn cháy lây lan ra các phòng khác.',
        'Bóng đèn và phụ kiện đèn có thể tích nhiệt, hãy kiểm tra xem đèn chiếu sáng có được cách nhiệt với các tấm gỗ ốp hoặc gỗ trần hay không nhé.',
        'Sử dụng điện an toàn, tháo lắp các thiết bị điện theo hướng dẫn của nhân viên chuyên môn. Thường xuyên kiểm tra, thay thiết các thiết bị điện dùng quá lâu.',
      ],
    },
  ],
  13: [
    {
      id: 1,
      title: 'Quy tắc 5 ngón tay là gì',
      content: [
        'Quy tắc 5 ngón tay( biện pháp phòng ngừa hữu hiệu nạn xâm hại trẻ em) sẽ giúp bạn tự xác định 5 nhóm người mà bạn thường gặp mỗi ngày. Do đó, việc bạn nên học quy tắc này để có thể biết và tránh xa những người không thuộc trong 5 nhóm này để bảo vệ bạn không phải là nạn nhân của vấn nạn xâm hại tình dục.',
      ],
    },
    {
      id: 2,
      title: 'Tại sao lại gọi là quy tắc 5 ngón tay',
      content: [
        'Bàn tay là thứ rất gần gũi với các bạn nhỏ, nhất là đối với những bạn nhỏ bị khuyết tật. Các bạn sử dụng tay từ lúc mới lọt lòng. Dùng tay để khám phá thế giới xung quanh thông qua các thao tác: sờ, chạm, cầm, nắm.',
        'Bàn tay còn là công cụ để bạn học tập, tương tác với những người xung quanh.',
        'Năm ngón tay còn tương ứng với năm vòng tròn giao tiếp của các bạn nhỏ.',
      ],
    },
    {
      id: 3,
      title: 'Giới thiệu về quy tắc 5 ngón tay',
      content: [
        'Ngón cái (gần mình nhất) tượng trưng cho những người thân ruột thịt trong gia đình như ông bà, bố mẹ, anh chị em ruột. Bạn có thể ôm hôn những người này hoặc đồng ý để các thành viên trong nhà ôm hôn, thể hiện tình yêu thương, tắm rửa khi bạn còn nhỏ. Nhưng khi đã lớn, bạn sẽ tự tắm và thay quần áo trong phòng kín.',
        'Ngón tay trỏ tượng trưng cho các thầy cô, bạn bè trên trường lớp hoặc họ hàng của gia đình. Đây là những người mà bạn được thể hiện các hành động thân thiện như: nắm tay, khoác vai hoặc chơi đùa. Phạm vi động vào bạn chỉ dừng lại ở những việc trên. Nếu một trong những người này chạm vào vùng kín của bạn, bạn phải hét thật to và thông báo cho cha mẹ.',
        'Ngón giữa tượng trưng cho những người quen biết nhưng ít khi gặp như hàng xóm, bạn bè của cha mẹ. Những người này, bạn chỉ nên bắt tay, cười và chào hỏi.',
        'Ngón áp út tượng trưng cho người quen của gia đình mà bạn mới gặp lần đầu. Với những người này, bạn chỉ nên dừng lại ở mức vẫy tay chào.',
        'Ngón út  (ngón tay xa bạn nhất) thể hiện cho những người hoàn toàn xa lạ hoặc người có cử chỉ thân mật, khiến bạn thấy lo sợ, bất an. Với những người này, bạn hoàn toàn có thể bỏ chạy, hét to để thông báo với mọi người xung quanh.',
      ],
    },
    {
      id: 4,
      title: 'Lý do các bạn nên học về quy tắc 5 ngón tay',
      content: [
        'Ngay từ khi còn nhỏ, những bạn nhỏ đã tò mò và hứng thú với mọi thứ xung quanh. Tuy vậy môi trường sinh hoạt và vui chơi của các bạn không phải đều là tích cực, là những người tốt mà có thể tồn tại những hiểm nguy rình rập. Trong số đó không thể không kể đến những nguy hiểm từ việc xâm hại đến trẻ nhỏ, có thể gây bóng đen tâm lý tới các bạn rất nhiều vậy nên việc học và hiểu rõ về quy tắc 5 ngón tay sẽ giúp bạn tránh khỏi sự tấn công của những kẻ xấu.',
        'Các bạn có thể bị xâm hại tình dục ở bất cứ đâu như: trường học, sân chơi, công viên, thang máy hay chính trong ngôi nhà của mình. Chỉ cần một chút sơ hở, thủ phạm sẽ lợi dụng cơ hội để tấn công bạn. Vì vậy hãy hiểu thật rõ về quy tắc 5 ngón tay bạn nhé để có thể nhận biết được những ai là người mình nên tiếp xúc gần và những ai là người mà bạn nên tránh xa để tránh gặp phải những trường hợp xấu nhé.',
      ],
    },
  ],
};

export interface IQuiz {
  id: number;
  question: string;
  answer: string[];
}

export interface IQuesTopic {
  [key: number]: IQuiz[];
}
export const ques_topic: IQuesTopic = {
  1: [
    {
      id: 1,
      question:
        'Khi bạn và một người bạn cùng nhau đi bơi, không may người bạn của bạn rơi vào tình trạng bị đuối nước bạn sẽ làm gì?',
      answer: [
        'Bơi ra để cứu bạn cho dù kỹ năng bơi lội của bạn còn chưa tốt, không có kỹ năng cứu đuối',
        'Nhanh chóng thông báo cho người lớn hoặc nhân viên cứu hộ gần nhất',
      ],
    },
    {
      id: 2,
      question:
        'Khi bơi ở những nơi rộng lớn như biển, sông bạn có nên bơi quá xa bờ không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 3,
      question: 'Trước khi xuống nước bạn nên làm gì?',
      answer: [
        'Khởi động kỹ càng trước khi xuống nước',
        'Không cần làm gì cả cứ thế xuống bơi',
      ],
    },
    {
      id: 4,
      question:
        'Khi bạn bị ốm sốt, mệt mỏi, khó thở hay các bệnh lý liên quan đến đường hô hấp bạn có nên đi bơi không?',
      answer: ['Có ', 'Không'],
    },
    {
      id: 5,
      question:
        'Nếu cảm thấy chưa tự tin vào kỹ năng bơi của mình bạn sẽ làm gì?',
      answer: [
        'Mặc kệ vì có làm sao cũng có người cứu hộ giúp',
        'Mặc áo phao để phòng tránh trường hợp bị đuối nước',
      ],
    },
    {
      id: 6,
      question: 'Khi bơi ở bể bơi bạn nên bơi ở đâu?',
      answer: [
        'Chỉ bơi ở bể bơi dành cho trẻ em và các khu vực có nhân viên cứu hộ, phương tiện cứu hộ',
        'Bơi ở những nơi mà mình cảm thấy thích',
      ],
    },
    {
      id: 7,
      question:
        'Khi tham gia các phương tiện giao thông đường thủy bạn có nên mặc áo phao không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 8,
      question: 'Khi đưa được nạn nhân đuối nước lên bờ bạn nên làm gì?',
      answer: [
        'Lập tức kiểm tra đường hô hấp của nạn nhân',
        'Cứ để họ nằm đó đi tìm nhân viên cứu hộ giúp',
      ],
    },
    {
      id: 9,
      question:
        'Trong trường hợp cứu nạn nhân đuối nước lên phát hiện miệng nạn nhân có dị vật bạn nên làm gì?',
      answer: [
        'Ngay lập tức móc ra',
        'Sợ hãi chờ đến khi nhân viên cứu hộ đến',
      ],
    },
    {
      id: 10,
      question:
        'Khi đưa được nạn nhân lên bờ và móc những dị vật có trong miệng nạn nhân bạn nên đặt nạn nhân nằm và đầu của bệnh nhân như nào để nước thoát ra?',
      answer: [
        'Nằm nghiêng và đầu thấp hơn so với cơ thể',
        'Nằm thẳng và đầu cao hơn so với cơ thể',
      ],
    },
  ],
  2: [
    {
      id: 1,
      question: 'Hành động nào dưới đây là bạo lực học đường?',
      answer: [
        '2 bạn chơi đùa cùng nhau trong giờ ra chơi không may bị vấp ngã',
        '1 bạn học sinh bị một nhóm học sinh khác đánh hội đồng',
      ],
    },
    {
      id: 2,
      question: 'Tác hại của bạo lực học đường đối với học sinh?',
      answer: [
        'Chỉ ảnh hưởng đến sức khỏe như xây xước, bầm tím,...',
        'Ảnh hưởng tiêu cực đến tâm lí sức khỏe và cả kết quả học tập',
      ],
    },
    {
      id: 3,
      question:
        'Cô giáo đánh học sinh trước lớp vì làm bài sai, hành động của cô giáo có được coi là bạo lực học đường không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 4,
      question:
        '"Hành vi uy hiếp bằng các phương tiện điện tử như gọi điện, nhắn tin, đe dọa và bêu rếu người nào đó trên mạng xã hội." là bạo lực học đường bằng?',
      answer: ['Bạo lực bằng lời nói', 'Bạo lực điện tử'],
    },
    {
      id: 5,
      question: 'Đâu là hành vi bạo lực tâm lí?',
      answer: [
        'Là hành vi động chạm những bộ phận nhạy cảm hoặc thậm chí có những hành vi cưỡng ép tình dục, hiếp dâm, …',
        'Là hành vi sử dụng những hành vi hoặc lời nói gây xúc phạm, gán ghép hoặc bôi nhọ, sỉ nhục, chế nhạo hoặc bắt người khác làm theo ý mình.',
      ],
    },
    {
      id: 6,
      question: 'Đâu là nguyên nhân của bạo lực học đường?',
      answer: [
        'Do chế độ ăn thiếu dinh dưỡng.',
        'Do bản thân các em chưa làm chủ được nhận thức và hành động của bản thân dẫn đến dễ cáu gắt, bực tức và có những hành vi gây bạo lực học đường.',
      ],
    },
    {
      id: 7,
      question: 'Đâu là cách phòng tránh bạo lực học đường?',
      answer: [
        'Đi học võ để nếu bị bạn đánh thì đánh trả.',
        'Học cách kiềm chế cảm xúc của bản thân, không được vì nóng giận tức thời mà có các cách hành động bạo lực với bạn bè.',
      ],
    },
    {
      id: 8,
      question:
        'Nếu thấy 1 bạn cùng lớp đang bị các bạn khác bắt nạt bạn cần làm gì?',
      answer: [
        'Làm ngơ như không biết chuyện gì xảy ra.',
        'Báo ngay cho các thầy cô để tìm cách giải quyết.',
      ],
    },
    {
      id: 9,
      question:
        'Những đối tượng nào sẽ bị ảnh hưởng nếu xảy ra bạo lực học đường?',
      answer: [
        'Bạo lực học đường ảnh hưởng đến cả học sinh, gia đình, nhà trường và xã hội',
        'Chỉ ảnh hưởng đến học sinh bị bạo hành',
      ],
    },
    {
      id: 10,
      question:
        '"Tích cực tham gia vào các hoạt động tình nguyện mà nhà trường tổ chức" có phải là một cách để giảm bạo lực học đường không?',
      answer: ['Không', 'Có'],
    },
  ],
  3: [
    {
      id: 1,
      question: 'Khi có kẻ cướp đột nhập vào nhà bạn nên:',
      answer: [
        'La hét thật to',
        'Bình tĩnh xử lí tránh làm bọn cướp kích động và có những hành động gây hại đến bạn',
      ],
    },
    {
      id: 2,
      question: 'Khi có kẻ trộm đột nhập vào nhà bạn sẽ làm gì?',
      answer: [
        'Đánh đuổi bọn trộm, chọn giận chúng',
        'Giả vờ ngoan ngoãn, im lặng tỏ vẻ đáng thương để tên trộm không gây thương tích',
      ],
    },
    {
      id: 3,
      question: 'Trong trường hợp tên trộm là người quen bạn nên làm gì:',
      answer: [
        'Giả vờ không quen biết chúng vì rất có thể chúng sẽ giết người để bịt đầu mối',
        'Cố tỏ ra quen biết chúng để chúng tha cho',
      ],
    },
    {
      id: 4,
      question:
        'Nếu tên trộm yêu cầu bạn chỉ chỗ cất giấu tiền hoặc giao nộp tài sản bạn sẽ làm gì?',
      answer: [
        'Từ chối và chống đối lại chúng vì tài sản mới là quan trọng',
        'Chỉ cho chúng chỗ giấu vì tính mạng mới là quan trọng nhất, tài sản mất đi vẫn có thể kiếm ra được',
      ],
    },
    {
      id: 5,
      question:
        'Khi bạn ở nhà một mình, không phải người bạn quen thân trước đó bạn có nên mở cửa cho họ không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 6,
      question:
        'Có cuộc gọi từ người lạ gọi đến khi bố mẹ vắng nhà bạn nên làm gì?',
      answer: [
        'Vui vẻ nhận cuộc gọi và cung cấp cho họ mọi thông tin về bạn',
        'Cẩn thận với mọi cuộc gọi từ người lạ và không cung cấp cho họ bất kỳ thông tin nào',
      ],
    },
    {
      id: 7,
      question:
        'Cách dễ nhận biết nhất khi nhà bạn có trộm là kiểm tra tất cả các cửa kính và cửa ra vào xem có dấu hiệu vỡ hay không là đúng hay sai?',
      answer: ['Đúng', 'Sai'],
    },
    {
      id: 8,
      question:
        'Số điện thoại bạn có thể gọi khi có kẻ trộm đột nhập trong lúc bố mẹ vắng nhà là?',
      answer: ['Cảnh sát (113)', 'Cấp cứu (115)'],
    },
    {
      id: 9,
      question: 'Khi biết có kẻ trộm vào nhà bạn sẽ thoát ra bằng đường nào ?',
      answer: [
        'Tìm đến lối thoát hiểm gần nhất để thoát ra khỏi nhà',
        'Tìm cửa chính của nhà để đi ra',
      ],
    },
    {
      id: 10,
      question:
        'Khi có kẻ đột nhập để giữ an toàn cho bản thân bạn nên làm gì?',
      answer: [
        'Ngồi một góc lo lắng và khóc',
        'Tìm một chỗ trốn an toàn như: gầm giường, tủ hoặc các căn phòng có thể khóa từ bên trong và dùng các vật nặng để chặn cửa',
      ],
    },
  ],
  4: [
    {
      id: 1,
      question: 'Có nên tự ý vuốt ve một con chó lạ hay không?',
      answer: [
        'Có. Nếu trông nó có vẻ thân thiện.',
        'Không nên đến gần những con chó lạ ngay cả khi trông nó thân thiện.',
      ],
    },
    {
      id: 2,
      question: 'Nếu có một con chó lạ đến gần bạn, bạn nên làm gì?',
      answer: [
        'Bỏ chạy nhanh nhất có thể, tìm bất kì thứ gì có thể đánh đuổi chúng như gậy, hay ném đá.',
        'Đứng yên, tránh nhìn thẳng vào mắt chúng, nếu chúng cảm thấy bạn không phải là mối đe dọa, chúng sẽ tự bỏ đi.',
      ],
    },
    {
      id: 3,
      question: 'Bạn nên làm gì khi bị chó cắn?',
      answer: [
        'Tấn công lại nó để trả thù',
        'Giữ bình tĩnh, vệ sinh vết thương, dùng băng gạc hoặc khăn sạch để băng vết thương sau đó thông báo cho bố mẹ, hoặc liên lạc với 115 để được hỗ trợ.',
      ],
    },
    {
      id: 4,
      question: 'Điều gì không nên làm khi bị chó cắn?',
      answer: ['Rửa vết thương bằng nước lạnh', 'Ăn và uống nước'],
    },
    {
      id: 5,
      question: 'Tại sao bạn không nên để mèo cào hoặc cắn?',
      answer: [
        'Vết cào và cắn có thể để lại sẹo, gây mất thẩm mĩ',
        'Móng vuốt và răng của mèo không những sắc còn chứa rất nhiều vi khuẩn có thể gây nhiễm trùng.',
      ],
    },
    {
      id: 6,
      question: 'Nếu bị mèo cào hoặc cắn, bạn nên làm gì?',
      answer: [
        'Chườm vết thương bằng nước lạnh hoặc đá lạnh.',
        'Rửa sạch vết thương ngay lập tức, nếu có thể hãy tự khử trùng hoặc nhờ bố mẹ khử trùng vết thương giúp càng sớm càng tốt để tránh nhiễm trùng',
      ],
    },
    {
      id: 7,
      question:
        'Tại sao không nên lại gần chất thải hoặc khay vệ sinh của mèo?',
      answer: [
        'Sẽ bị chúng tấn công',
        'Vì trong đó chứa rất nhiều vi khuẩn có thể lây bệnh cho bạn.',
      ],
    },
    {
      id: 8,
      question:
        'Nếu bắt buộc phải di chuyển qua bãi cỏ cao hoặc bụi rậm bạn nên làm gì?',
      answer: ['Mặc quần áo dài tay', 'Xịt hoặc thoa kem chống côn trùng'],
    },
    {
      id: 9,
      question:
        'Nếu không may gặp phải rắn hoặc côn trùng nguy hiểm như ong bắp cày, bạn nên làm gì?',
      answer: [
        'Cố gắng giữ khoảng cách với chúng, đứng im chờ chúng di chuyển khỏi vị trí của bạn.',
        'Cố gắng chạy khỏi khu vực đó càng nhanh càng tốt.',
      ],
    },
    {
      id: 10,
      question: 'Nếu không may bị rắn cắn hoặc côn trùng đốt, bạn nên làm gì?',
      answer: [
        'Gọi điện thông báo cho bố mẹ',
        'Giữ bình tĩnh, băng chặt vết thương sau đó liên hệ với bố mẹ hoặc 115 để được giúp đỡ càng nhanh càng tốt',
      ],
    },
  ],
  5: [
    {
      id: 1,
      question: 'Các bước xử lí các vết thương bị bầm tím',
      answer: [
        'Rửa sạch - Chườm đá lạnh - Thông báo lại cho bố mẹ',
        'Cố định vùng bị chấn thương - Gọi ngay cho 115 để được giúp đỡ',
      ],
    },
    {
      id: 2,
      question:
        'Bạn nên làm gì khi gặp phải một vết thương quá lớn và chảy máu nhiều',
      answer: [
        'Dùng khăn vải hoặc bông gạc sạch để cầm máu tạm thời, sau đó ngay lập tức tìm thầy cô, bố mẹ để được hỗ trợ xử lí, nếu bạn đang ở một mình hoặc không có người lớn quanh đó, bạn nên liên lạc với 115 để được các nhân viên y tế hỗ trợ.',
        'Băng vết thương bằng bông và gạc sạch, hoặc băng keo cá nhân để cầm máu và tránh bụi bẩn.',
      ],
    },
    {
      id: 3,
      question: 'Đặc điểm của những chấn thương gãy xương là:',
      answer: [
        'Thường là vết thương hở, chảy rất nhiều máu',
        'Thường là những vết thương không chảy máu nhưng vô cùng đau nhức.',
      ],
    },
    {
      id: 4,
      question: 'Khi gặp các chấn thương gãy xương chúng ta nên',
      answer: [
        'Che phủ vùng bỏng bằng gạc vô khuẩn. Nếu không có gạc có thể dùng vải sạch',
        'Sử dụng nẹp hoặc bất kì thứ gì có hình dạng thẳng, dài vừa phải so với vùng chấn thương, có hình dáng tương tự như nẹp mà bạn có thể tìm được xung quanh, ép sát vùng bị chấn thương và cố định chắc chắn lại bằng dây hoặc băng gạc.',
      ],
    },
    {
      id: 5,
      question: 'Khi bị bỏng bạn nên làm gì đầu tiên?',
      answer: [
        'Làm mát vết bỏng, tránh cho da khỏi bị rộp bằng cách mở vòi nước cho chảy chầm chậm lên vết bỏng khoảng 15 - 20 phút.',
        'Tìm cách gọi cho bố mẹ, và chờ bố mẹ đến để giúp xử lí vết thương',
      ],
    },
    {
      id: 6,
      question:
        '"Khi bị bỏng bạn nên ngay lập tức dùng nước lạnh, nước đá (trong tủ lạnh) để làm mát da, vì nước lạnh, nước đá giúp giảm nhiệt, giảm đau, giảm phù nề, viêm nhiễm, giảm độ sâu của vết thương." Cách xử trí trên đúng hay sai',
      answer: ['Đúng', 'Sai'],
    },
    {
      id: 7,
      question:
        'Sau khi làm mát vết bỏng bằng nước sạch, chúng ta nên làm gì tiếp theo?',
      answer: [
        'Nhẹ nhàng tháo bỏ những vật cứng trên vùng bỏng như giầy, dép, vòng tại nơi bị bỏng.',
        'Thông báo cho thầy cô, ba mẹ, hoặc gọi cho 115 để được giúp đỡ',
      ],
    },
    {
      id: 8,
      question: 'CPR là gì?',
      answer: [
        'Kĩ năng kiểm soát chảy máu, dùng để xử lí các vết thương lớn, chảy máu nh',
        'Phương pháp hồi sức tim phổi để cấp c trong các trường hợp khẩn cấp như: tai nạn, ngạt nước, ngạt thở, ngộ độc, hít phải khói thuốc, điện giật, hoặc đột tử',
      ],
    },
    {
      id: 9,
      question:
        'Quy trình hồi sức tim phổi bao gồm:(1) Quỳ xuống cạnh cổ và vai của nạn nhân (2) Đặt gót bàn tay lên chính giữa ngực, tay còn lại đè lên bàn tay thứ nhất. Giữ khuỷu tay thẳng, vai thẳng góc với tay.(3) Sử dụng trọng lượng phần trên của cơ thể (không chỉ là cánh tay) và ấn thẳng xuống (nén) ngực tối thiểu 5cm nhưng không lớn hơn 6cm. Ấn mạnh ở mức 100 đến 120 lần một phút, và cứ tiếp tục ấn ngực cho đến khi có dấu hiệu cử động hoặc đến khi nhân viên y tế đến.(4) Đặt nạn nhân nằm ngửa trên bề mặt chắc chắn.',
      answer: ['(4) - (1) - (2) - (3)', '(1) - (3) - (2) - (1)'],
    },
    {
      id: 10,
      question: `Ý k nào sau đây là đúng. (1) Nên tiến hành hồi sức tim phổi sau khi gọi cấp cứu, trong thời gian chờ nhân viên y tế đến.
      (2) Nên tiến hành hồi sức tim phổi trước, sau 15ph mà nạn nhân không có dấu hiệu tình lại mới gọi cấp cứu
      (3) Không nên hồi sức tim phổi cho nạn nhân nếu không có sự giám sát của nhân viên y tế hoặc người có chuyên môn.
      `,
      answer: ['(2) và (3)', '(1)'],
    },
  ],
  6: [
    {
      id: 1,
      question: 'Khi đi ở những nơi tối tăm vắng vẻ bạn nên:',
      answer: [
        'Đi một mình',
        'Đi cùng bố mẹ hoặc người thân trong gia đình bạn',
      ],
    },
    {
      id: 2,
      question: 'Mẹ ôm bạn khi đi ngủ, tắm cho bạn là hành động:',
      answer: ['Hành động yêu thương', 'Hành động xâm hại tình dục'],
    },
    {
      id: 3,
      question:
        'Khi chỉ có ở nhà một mình bạn có nên cho người lạ vào nhà không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 4,
      question: 'Nếu người lạ mời bạn ăn bánh, kẹo,.bạn sẽ làm như nào?',
      answer: ['Lập tức nhận ngay', 'Không nhận đồ ăn của người lạ cho'],
    },
    {
      id: 5,
      question:
        'Trong trường hợp bạn ở nhà một mình và có người lạ gọi đến nhà bạn sẽ:',
      answer: [
        'Nghe máy, họ hỏi gì thì trả lời đó',
        'Nhận thấy là người lạ lập tức tắt máy',
      ],
    },
    {
      id: 6,
      question:
        'Khi chỉ có bạn và một người lạ vừa mới quen bạn nên đứng như thế nào với họ:',
      answer: [
        'Giữ khoảng cách với họ để họ không chạm vào mình',
        'Đứng gần đến mức họ có thể chạm vào mình',
      ],
    },
    {
      id: 7,
      question:
        'Không ai có quyền đụng chạm, sờ mó vào chỗ kín của cơ thể hoặc bất kỳ hành   động thô lỗ nào với các bạn là đúng hay sai?',
      answer: ['Đúng', 'Sai'],
    },
    {
      id: 8,
      question: 'Khi ra đường ở lứa tuổi bạn nên mặc thế nào cho phù hợp?',
      answer: ['Mặc kín đáo', 'Mặc hở hang'],
    },
    {
      id: 9,
      question: 'Khi bố mẹ đến đón bạn ở trường muộn bạn nên làm gì?',
      answer: [
        'Liên lạc với bố mẹ và chờ tới khi bố mẹ đến đón',
        'Đi nhờ xe của người lạ',
      ],
    },
    {
      id: 10,
      question: '1Những người bạn có thể gần gũi là ai?',
      answer: [
        'Bố mẹ, ông bà, những người thân trong gia đình',
        'Những người xa lạ, chưa từng gặp mặt, không hề quen biết',
      ],
    },
  ],
  7: [
    {
      id: 1,
      question:
        'Khi đi có người lạ cố gắng tiếp cận để bắt chuyện với bạn bạn sẽ làm gì?',
      answer: [
        'Đứng lại và trả lời họ',
        'Chạy trốn ngay lập tức và nói với bố mẹ hoặc những người lớn có thể tin tưởng xung quanh như: Bác bảo vệ, Chú công an',
      ],
    },
    {
      id: 2,
      question:
        'Nếu có người lạ mặt nào đó cho bạn bánh, kẹo, hay ngỏ lời rủ bạn đi công viên, những nơi mà bạn thích bạn sẽ làm gì?',
      answer: [
        'Nhận ngay và lập tức đi theo họ',
        'Từ chối khéo rằng “ bố mẹ cháu không cho phép nhận” và đi ngay',
      ],
    },
    {
      id: 3,
      question: 'Trong trường có người lạ lôi hoặc kéo bạn đi bạn sẽ làm:',
      answer: [
        'Đi theo họ rồi tính sau',
        'Khóc và hét thật to để mọi người xung quanh có thể nghe được và giúp bạn',
      ],
    },
    {
      id: 4,
      question:
        'Trong những nơi đông đúc như: siêu thị, trung tâm thương mại, công viên,. bạn nên:',
      answer: [
        'Luôn đi gần, nắm chặt tay bố mẹ',
        'Tự đi ra những nơi mà mình muốn đi',
      ],
    },
    {
      id: 5,
      question: 'Khi bố mẹ đi khuất khỏi tầm nhìn của bạn, bạn nên làm gì?',
      answer: ['Đứng im đó và khóc', 'Gọi bố mẹ thật to lên'],
    },
    {
      id: 6,
      question:
        'Trong lúc bố mẹ đi vắng,có người lạ đến nhà và tự nhận là người quen của bố mẹ bạn, bạn sẽ làm gì?',
      answer: [
        'Ngay lập tức mở cửa cho họ vào nhà',
        'Không tiếp chuyện, mở cửa cho người lạ vào nhà',
      ],
    },
    {
      id: 7,
      question:
        'Bố mẹ vắng nhà, chỉ còn lại bạn ở nhà một mình, bạn có nên khóa cửa nhà và bỏ ra ngoài chơi không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 8,
      question:
        'Để phòng tránh trường hợp bị thôi miên, đầu độc, dụ dỗ bạn nên tránh điều gì?',
      answer: [
        'Đứng gần cửa ra vào để nói chuyện với khách',
        'Đứng xa cửa ra vào để nói chuyện với khách',
      ],
    },
    {
      id: 9,
      question:
        'Việc đăng những thông tin cá nhân như:tên đầy đủ, tên của những thành viên trong gia đình, số điện thoại, điện chỉ nhà, trường học lên mạng là có nên không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 10,
      question:
        'Nếu bạn đang chờ bố mẹ đến đón tan học, mà có một người lạ mặt tự nhận là người quen của bố mẹ và được bố mẹ nhờ để đưa bạn về, bạn sẽ làm gì:',
      answer: [
        'Tin tưởng và đi theo họ ngay',
        'Tìm cách liên lạc với bố mẹ để xác nhận, trong trường hợp không liên lạc được với bố mẹ tuyệt đối sẽ không đi theo người lạ',
      ],
    },
  ],
  8: [
    {
      id: 1,
      question:
        'Lo lắng quá nhiều chuyện có phải là một trong những nguyên nhân khiến bạn bị bệnh không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 2,
      question:
        'Trong trường hợp bạn bị ốm mà còn quá nhiều bài tập bạn sẽ làm gì?',
      answer: [
        'Đi ngủ ngay lập tức ngay khi cảm thấy quá mệt',
        'Tiếp tục cố làm cho xong bài tập',
      ],
    },
    {
      id: 3,
      question: 'Khi bị ốm, trong trường hợp cần uống thuốc bạn nên:',
      answer: ['Tự ý uống thuốc', 'Uống thuốc theo chỉ định của bác sĩ'],
    },
    {
      id: 4,
      question:
        'Việc uống nhiều nước trong lúc bị ốm là có cần thiết hay không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 5,
      question:
        'Trong trường hợp sốt quá cao không thử tự xử lí ở nhà được bạn sẽ liên lạc cho số điện thoại nào dưới đây?',
      answer: ['Cấp cứu (115)', 'Cảnh sát (113)'],
    },
    {
      id: 6,
      question: 'Để tránh bị ốm do virut truyền nhiễm từ niêm mạc bạn nên?',
      answer: [
        'Hạn chế chạm vào mắt, mũi, miệng',
        'Tay bẩn và chạm vào mắt, mũi, miệng',
      ],
    },
    {
      id: 7,
      question: 'Vận động như nào thì tốt cho sức khỏe?',
      answer: [
        'Vận động mạnh càng nhiều càng tốt',
        'Vận động vừa phải, phù hợp với cơ thể của bản thân',
      ],
    },
    {
      id: 8,
      question: 'Khi từ ngoài trở về nhà việc đầu tiên bạn nên làm là gì?',
      answer: ['Rửa tay', 'Làm những điều mình thích'],
    },
    {
      id: 9,
      question:
        'Để đề phòng bệnh cảm lạnh bạn nên làm gì vào mỗi buổi sáng và buổi tối trước khi đi ngủ?',
      answer: ['Rửa tay', 'Súc miệng'],
    },
    {
      id: 10,
      question: 'Trước khi ăn cơm hay nấu nướng bạn có nên rửa tay không?',
      answer: ['Có', 'Không'],
    },
  ],
  9: [
    {
      id: 1,
      question: 'Khi bị lạc các bạn nên làm gì:',
      answer: ['Ngồi 1 chỗ rồi khóc', 'Bình tĩnh nhờ người tin tưởng giúp đỡ'],
    },
    {
      id: 2,
      question: 'Khi bị người lạ kéo đi tay bắt đi theo bạn nên làm gì:',
      answer: [
        'Hét to lên : “ Cứu với” “ Cháu không quen cô/chú”',
        'Khóc và cứ để họ kéo đi',
      ],
    },
    {
      id: 3,
      question:
        'Có người lạ rủ đi theo và hứa sẽ tìm người thân cho thì các bạn làm gì?',
      answer: [
        'Từ chối không đi theo',
        'Đồng ý đi theo người lạ để tìm người thân',
      ],
    },
    {
      id: 4,
      question: 'Những người bạn tin tưởng giúp đỡ con khi bị lạc là ai?',
      answer: ['Bác bảo vệ, chú công an', 'Người lạ'],
    },
    {
      id: 5,
      question:
        'Khi đi vào những nơi đông người như trung tâm thương mại, công viên, siêu thị bạn nên:',
      answer: ['Nắm chặt tay bố mẹ', 'Một mình đi đến những nơi mình thích'],
    },
    {
      id: 6,
      question: 'Nếu trong trường hợp bị đi lạc bạn nên:',
      answer: [
        'Đi xung quanh để tìm bố mẹ',
        'Bình tĩnh, đứng yên ở vị trí cũ chờ bố mẹ quay lại',
      ],
    },
    {
      id: 7,
      question: 'Khi có người lạ cho bạn kẹo, bánh,.bạn có nên nhận không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 8,
      question:
        'Bạn có nên ghi nhớ tên, số điện thoại, địa chỉ nhà của bố mẹ để đề phòng trường hợp bị lạc không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 9,
      question: 'Khi bị lạc bạn không nên làm gì:',
      answer: [
        'Đi lòng vòng tìm người thân',
        'Tìm ngay đến nơi có thể giúp mình như: Bác bảo bảo vệ, chú cảnh sát, cô lao công,...',
      ],
    },
    {
      id: 10,
      question:
        'Để tránh trường hợp bị lạc bạn có nên định ra một nơi dễ nhận biết với bố mẹ không?',
      answer: ['Có', 'Không'],
    },
  ],
  10: [
    {
      id: 1,
      question:
        'Khi đang di chuyển trên đường thì gặp đèn tín hiệu giao thông đang chuyển đỏ thì bạn nên:',
      answer: [
        'Đi chầm chậm và dừng đợi đèn chuyển xanh rồi đi tiếp.',
        'Đi thật nhanh qua đèn đỏ.',
      ],
    },
    {
      id: 2,
      question: 'Khi đi bộ trên đường bạn nên đi ở:',
      answer: [
        'Đi ở những phần đường dành cho người đi bộ và đi trên vỉa hè.',
        'Đi xuống cả phần đường cho ô tô và xe máy.',
      ],
    },
    {
      id: 3,
      question: 'Khi đi bộ từ ngõ ra đường chính bạn nên:',
      answer: [
        'Cứ thế chạy ra khỏi ngõ.',
        'Quan sát trước sau, chú ý hướng xe đang đi lại rồi mới đi từ từ ra.',
      ],
    },
    {
      id: 4,
      question: 'Khi sang đường dành cho người đi bộ bạn nên:',
      answer: [
        ' Tiện ở đâu thì sang ở đó',
        'Chỉ sang đường ở những nơi có vạch kẻ đường và tín hiệu đèn giao thông dành cho người đi bộ đã chuyển sang màu xanh.',
      ],
    },
    {
      id: 5,
      question: 'Khi tham gia giao thông bằng xe máy bạn nên mang gì:',
      answer: [
        ' Đảm bảo mang đầy đủ mũ bảo hiểm khi tham giao thông.',
        'Không cần đội mũ, cứ để vậy tham gia giao thông.',
      ],
    },
    {
      id: 6,
      question:
        'Khi đi xe đạp trên đường mà gặp chướng ngại vật bạn nên làm gì?',
      answer: [
        ' Mặc kệ chướng ngại vật và cứ thế đi tiếp.',
        'Bấm chuông khi đằng trước có chướng ngại vật.',
      ],
    },
    {
      id: 7,
      question:
        'Khi di chuyển bằng xe đạp trên đường bạn nên đi về phía bên nào:',
      answer: ['Đi về phía bên phải đường.', 'Đi về phía bên trái đường.'],
    },
    {
      id: 8,
      question:
        'Khi đang di chuyển trên đường và gặp đèn đỏ bạn nên dừng ở đâu:',
      answer: [
        ' Dừng trên vạch kẻ màu trắng.',
        ' Dừng ở dưới vạch kẻ màu trắng.',
      ],
    },
    {
      id: 9,
      question: 'Khi chuyển làn đường bạn nên làm gì:',
      answer: ['Cứ thế đi qua.', '  Ra tín hiệu sang đường.'],
    },
    {
      id: 10,
      question:
        'Khi đang di chuyển trên đường bạn có nên vừa đi vừa nghe nhạc không?',
      answer: ['Có', '  Không'],
    },
  ],
  11: [
    {
      id: 1,
      question: 'Trong trường hợp người lạ cố dắt tay bạn đi bạn nên làm gì:',
      answer: [
        'Chỉ khóc và để họ kéo đi',
        'Hét to lên “ cháu không quen cô/chú”, “ đây không phải là bố mẹ cháu”',
      ],
    },
    {
      id: 2,
      question: 'Khi được người lạ cho bánh, kẹo bạn nên:',
      answer: [
        'Lập tức nhận ngay',
        'Từ chối một cách khéo léo rằng: “ bố mẹ cháu không cho nhận”',
      ],
    },
    {
      id: 3,
      question:
        'Khi có người lạ gọi đến nhà trong lúc bố mẹ bạn đi vắng bạn nên:',
      answer: [
        'Nói thẳng với họ: “Bố mẹ cháu không cho phép nói chuyện với người lạ lâu xin bác thông cảm” rồi cúp máy',
        'Cho họ biết mọi thông tin về địa chỉ nhà và bố mẹ',
      ],
    },
    {
      id: 4,
      question:
        'Việc nhận quà như: bóng bay, bánh kẹo,... từ người lạ là có nên hay không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 5,
      question:
        'Khi bạn ở nhà một mình mà có người quen của bố mẹ hay người lạ như: thợ sửa ống nước, hàng xóm, nhân viên thu tiền điện thoại,...bạn sẽ làm gì:',
      answer: [
        'Lập tức mở cửa cho họ',
        'Hỏi họ có chuyện gì nhắn lại hoặc hẹn chiều tối đến gặp bố mẹ',
      ],
    },
    {
      id: 6,
      question:
        'Đang đi bộ trên đường thì bị người lạ bắt lên xe bạn sẽ làm gì:',
      answer: [
        'Quẫy đạp và hét thật to lên để mọi người giúp đỡ',
        'Chỉ khóc\xa0',
      ],
    },
    {
      id: 7,
      question:
        'Nếu người lạ gọi đến trêu chọc nhiều lần hay đe dọa bạn bạn sẽ gọi cho ai:',
      answer: ['Tố cáo với cảnh sát qua số điện thoại (113)', 'Cấp cứu (115)'],
    },
    {
      id: 8,
      question: 'Nếu trong thang máy chỉ có 2 người, bạn sẽ làm gì:',
      answer: [
        'Đi chung với người lạ',
        'Đợi đến khi thang máy đông người mới đi',
      ],
    },
    {
      id: 9,
      question:
        'Trong trường hợp người lạ cố đến gần để tiếp cận bạn, bạn sẽ làm gì:',
      answer: [
        'Đứng im sợ hãi',
        'Lùi lại, đi về hướng có nhiều người hơn, và nhờ sự giúp đỡ nếu cần',
      ],
    },
    {
      id: 10,
      question:
        'Khi bị lạc bố mẹ ở những nơi đông người như: trung tâm thương mại, công viên, siêu thị,... bạn nên phản ứng ra sao:',
      answer: ['Tuyệt đối giữ bình tĩnh', 'Mất bình tĩnh, khóc, la hét'],
    },
  ],
  12: [
    {
      id: 1,
      question: 'Hỏa hoạn là hiểm họa do gì gây ra?',
      answer: ['Nước', 'Lửa'],
    },
    {
      id: 2,
      question: 'Nến có phải là đồ chơi cho bạn không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 3,
      question: 'Bình gas khi đun nấu xong bạn nên:',
      answer: ['Khóa van bình gas', 'Để nguyên như vậy'],
    },
    {
      id: 4,
      question: 'Khi gặp hỏa hoạn bạn nên gọi đến số điện thoại nào?',
      answer: ['Cấp cứu (114)', 'b.Cứu hỏa (115)'],
    },
    {
      id: 5,
      question:
        'Để tránh trường hợp di chuyển ra khỏi đám cháy bị ngạt thở bạn nên làm gì?',
      answer: [
        'Lấy khăn ướt, bịt vào mũi và di chuyển ra khỏi đám cháy',
        'Cứ thế di chuyển ra khỏi đám cháy',
      ],
    },
    {
      id: 6,
      question:
        'Trong trường hợp cháy nổ, đông người, hỗn loạn bạn không nên làm gì?',
      answer: [
        'Chạy ngược dòng đám đông, chen ngang, giẫm đạp lên nhau',
        'Cúi thấp người xuống, từ từ đi ra lối thoát hiểm',
      ],
    },
    {
      id: 7,
      question:
        'Trước khi ra khỏi nhà,hay đi ngủ bạn có nên kiểm tra và tắt những thiết bị điện không cần thiết không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 8,
      question: 'Khi xảy ra hỏa hoạn bạn nên di chuyển bằng:',
      answer: ['Thang bộ', 'Thang máy'],
    },
    {
      id: 9,
      question: 'Có nên vừa dùng điện thoại vừa sạc không?',
      answer: ['Có', 'Không'],
    },
    {
      id: 10,
      question: 'Có nên sử dụng máy sưởi làm khô giày, quần áo?',
      answer: ['Có', 'Không'],
    },
  ],
  13: [
    {
      id: 1,
      question: 'Quy tắc 5 ngón tay là biện pháp phòng ngừa hữu hiệu nạn:',
      answer: ['Xâm hại ở trẻ em', 'Bạo lực học đường'],
    },
    {
      id: 2,
      question: 'Ngón cái tượng trưng cho:',
      answer: [
        'Những người thân trong gia đình như:ông bà, bố mẹ, anh chị em ruột,...',
        'Thầy cô, bạn bè trên trường lớp hoặc họ hàng của gia đình',
      ],
    },
    {
      id: 3,
      question: 'Ngón tay trỏ tượng trưng cho:',
      answer: [
        'Thầy cô, bạn bè trên trường lớp hoặc họ hàng của gia đình',
        'Người quen biết nhưng ít khi gặp như: hàng xóm,bạn bè của cha mẹ',
      ],
    },
    {
      id: 4,
      question: 'Ngón giữa tượng trưng cho:',
      answer: [
        'Người quen biết nhưng ít khi gặp như: hàng xóm,bạn bè của cha mẹ',
        'b.Những người thân trong gia đình như: ông bà, bố mẹ, anh chị em ruột,...',
      ],
    },
    {
      id: 5,
      question: 'Ngón áp út tượng trưng cho:',
      answer: [
        'Người quen của gia đình người mà bạn mới gặp lần đầu',
        'Những người hoàn toàn xa lạ',
      ],
    },
    {
      id: 6,
      question: 'Ngón út tượng trưng cho:',
      answer: [
        'Những người hoàn toàn xa lạ hoặc người có cử chỉ thân mật, khiến bạn thấy lo sợ, bất an.',
        'Những người thân trong gia đình như:ông bà, bố mẹ, anh chị em ruột,...',
      ],
    },
    {
      id: 7,
      question:
        'Với những người thuộc nhóm ngón cái có thể thể hiện tình cảm như nào với bạn:',
      answer: [
        'Ôm hôn, thể hiện tình yêu thương, tắm rửa khi bạn còn nhỏ',
        'Bỏ chạy, hét to khi họ có ý định chạm vào bạn',
      ],
    },
    {
      id: 8,
      question: 'Khi gặp những người thuộc nhóm áp út bạn sẽ làm gì:',
      answer: ['Chỉ vẫy tay chào', 'Ôm hôn, thể hiện tình yêu thương'],
    },
    {
      id: 9,
      question:
        'Trong trường hợp những người thuộc nhóm tay trỏ có ý định chạm vào vùng kín của bạn, bạn sẽ làm gì:',
      answer: [
        'Hét thật to và thông báo cho cha mẹ',
        'Chỉ khóc và không dám nói với cha mẹ',
      ],
    },
    {
      id: 10,
      question: 'Khi gặp những người ở ngón giữa bạn nên làm gì:',
      answer: [
        'Bắt tay, cười và chào hỏi',
        'Chạy, hét to để thông báo với những người xung quanh',
      ],
    },
  ],
};

export const answer_topic: { [key: number]: string[] } = {
  1: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  2: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  3: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  4: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  5: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  6: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  7: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  8: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  9: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  10: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  11: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  12: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  13: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
};

export const evaluateSentence = (mark: number) => {
  if (mark >= 9) {
    return [
      'Ôi bạn thật xuất sắc!',
      'Wow, giỏi quá đi! ',
      'Xin chúc mừng, bạn giỏi quá!',
      'Bài làm của bạn quá xuất sắc, thật ngưỡng mộ!',
    ];
  } else if (mark >= 7) {
    return [
      'Wow, bạn giỏi quá!',
      'Một kết quả tuyệt vời! Nếu muốn đạt huy chương vàng, bạn hãy xem lại lý thuyết và thử lại một lần nữa nhé!',
      'Thiếu 1 xíu nữa thôi là được huy chương vàng rồi ấy, thật bình tĩnh và thử lại nha!',
    ];
  } else if (mark >= 4) {
    return [
      'Yay! hãy cố gắng đạt huy chương vàng vào lần sau nha!',
      'Một kết quả khá tốt! Tuy nhiên mình tin bạn có thể làm tốt hơn nữa đó!',
      'Một vài câu sai khá đáng tiếc nè! Bạn hãy xem lại lý thuyết và thử lại nhé!',
    ];
  } else
    return [
      'Có vẻ như bạn chưa tập trung lắm, lần sau cố gắng làm tốt hơn nha!',
      'Kết quả này chưa được tốt lắm, hãy cố gắng hơn vào lần sau nhé!',
      'Hãy xem lại phần lý thuyết và thử lại một lần nữa nha!',
    ];
};
