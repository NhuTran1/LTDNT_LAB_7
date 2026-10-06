// data/story.js
import { validateStory } from '../models/StoryNode';

export const STORY = {
  start: {
    id: 'start',
    text: 'Bạn tỉnh dậy trong một chiếc xe hơi bị lật. Mưa nặng hạt đập vào kính. Bạn bị thương ở tay, nhưng vẫn có thể di chuyển. Không có tín hiệu điện thoại.',
    choices: [
      { text: 'Chạy ra khỏi xe', nextId: 'outOfCar' },
      { text: 'Ở lại trong xe', nextId: 'stayInCar' },
    ],
  },

  outOfCar: {
    id: 'outOfCar',
    text: 'Bạn lê người ra khỏi xe. Phía trước có hai con đường: một bên là khu rừng tối om, một bên có ánh đèn le lói từ xa.',
    choices: [
      { text: 'Đi vào rừng', nextId: 'forest' },
      { text: 'Đi về phía ánh đèn', nextId: 'lights' },
    ],
  },

  stayInCar: {
    id: 'stayInCar',
    text: 'Bạn nằm lại trong xe, cố gắng giữ ấm. Trong túi có một chiếc điện thoại đã hết pin và một chiếc bật lửa.',
    choices: [
      { text: 'Cố gắng bật lửa để tạo tín hiệu', nextId: 'fireSignal' },
      { text: 'Ngủ thiếp đi', nextId: 'sleep' },
    ],
  },

  forest: {
    id: 'forest',
    text: 'Bạn đi sâu vào rừng. Tiếng động lạ phát ra từ bụi cây. Bạn nghe thấy tiếng bước chân.',
    choices: [
      { text: 'Trèo lên cây', nextId: 'climbTree' },
      { text: 'Đứng yên và quan sát', nextId: 'standStill' },
    ],
  },

  lights: {
    id: 'lights',
    text: 'Bạn đi về phía ánh đèn. Đó là một ngôi nhà gỗ nhỏ. Cửa mở, ánh sáng vàng ấm áp tràn ra ngoài.',
    choices: [
      { text: 'Gõ cửa', nextId: 'knockDoor' },
      { text: 'Nhìn qua cửa sổ trước', nextId: 'peekWindow' },
    ],
  },

  fireSignal: {
    id: 'fireSignal',
    text: 'Bạn bật lửa và đốt một mảnh vải. Ngọn lửa nhỏ nhưng đủ để một chiếc xe tải đi ngang qua nhìn thấy.',
    choices: [
      { text: 'Vẫy tay cầu cứu', nextId: 'rescued' },
      { text: 'Nấp đi vì sợ', nextId: 'missedRescue' },
    ],
  },

  sleep: {
    id: 'sleep',
    text: 'Bạn nhắm mắt lại. Cái lạnh thấm vào xương. Bạn không bao giờ tỉnh lại nữa.',
    choices: [],
  },

  climbTree: {
    id: 'climbTree',
    text: 'Bạn trèo lên cây cao. Từ trên cao, bạn thấy một con đường lớn cách đó không xa. Nhưng bạn cũng thấy một con sói đang đi lang thang dưới gốc.',
    choices: [
      { text: 'Chờ sói đi rồi tụt xuống', nextId: 'waitWolf' },
      { text: 'Hét lên cầu cứu', nextId: 'scream' },
    ],
  },

  standStill: {
    id: 'standStill',
    text: 'Bạn đứng yên. Một con nai bước ra khỏi bụi cây. Nó nhìn bạn một lúc rồi bỏ đi. Bạn thở phào nhẹ nhõm.',
    choices: [
      { text: 'Đi theo con nai', nextId: 'followDeer' },
      { text: 'Quay lại xe', nextId: 'start' },
    ],
  },

  knockDoor: {
    id: 'knockDoor',
    text: 'Một ông lão mở cửa. Ông mỉm cười và mời bạn vào. Ông cho bạn trà nóng và gọi cứu hộ.',
    choices: [],
  },

  peekWindow: {
    id: 'peekWindow',
    text: 'Bạn nhìn qua cửa sổ. Bên trong có 3 người đàn ông đang uống rượu, tay cầm dao. Bạn lùi lại và bỏ đi.',
    choices: [
      { text: 'Quay lại xe', nextId: 'start' },
      { text: 'Đi tiếp vào rừng', nextId: 'forest' },
    ],
  },

  rescued: {
    id: 'rescued',
    text: 'Chiếc xe tải dừng lại. Tài xế gọi cứu hộ. 30 phút sau, xe cứu thương đến. Bạn được đưa đến bệnh viện và sống sót.',
    choices: [],
  },

  missedRescue: {
    id: 'missedRescue',
    text: 'Bạn nấp sau chiếc xe. Chiếc xe tải chạy qua mà không thấy bạn. Bạn ở lại một mình trong đêm tối.',
    choices: [
      { text: 'Thử bật lửa lần nữa', nextId: 'fireSignal' },
      { text: 'Đi bộ về phía có ánh đèn', nextId: 'lights' },
    ],
  },

  waitWolf: {
    id: 'waitWolf',
    text: 'Bạn chờ 20 phút. Con sói bỏ đi. Bạn tụt xuống và đi về phía con đường lớn. Một chiếc xe dừng lại giúp bạn.',
    choices: [],
  },

  scream: {
    id: 'scream',
    text: 'Tiếng hét của bạn vang vọng trong rừng. Con sói nhìn lên và bắt đầu trèo cây...',
    choices: [],
  },

  followDeer: {
    id: 'followDeer',
    text: 'Con nai dẫn bạn đi qua một lối mòn. Cuối con đường là một trạm kiểm lâm. Họ đưa bạn về thành phố an toàn.',
    choices: [],
  },
};

// Validate khi import — báo lỗi sớm nếu data sai
validateStory(STORY);